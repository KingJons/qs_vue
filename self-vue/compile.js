// vm  => vue实例 mvvm 虚拟dom对象
// 真实DOM非常消耗内存 
// vm 将很多次的修改 最后集中成一次
function Compile (el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
}

Compile.prototype = {
    init () {
        // 接管模板去编译，显示的不是html，只是模板 从头开始处理模板
        this.fragment = this.nodeToFragment(this.el);
        // console.log(this.el);
        this.compileElement(this.fragment);
        this.el.appendChild(this.fragment);
    },
    compileElement (el) {
        var childNodes = el.childNodes;
        [].slice.call(childNodes).forEach((node) => {
            // console.log(node);
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent; 
            if(this.isElementNode(node)) {   
                // 分析结点          
                this.compile(node);
            } else if(this.isTextNode(node) && reg.test(text)) {
                // console.log(reg.exec(text)[1]);
                this.compileText(node, reg.exec(text)[1]);
            }
            if(node.childNodes && node.childNodes.length) {
                // 递归
                this.compileElement(node);
            }
        });
    },
    isElementNode (node) {
        return node.nodeType == 1;
    },
    isTextNode (node) {
        return node.nodeType == 3;
    },
    compile (node) {
        var nodeAttrs = node.attributes;
        Array.prototype.forEach.call(nodeAttrs, (attr) => {
            var attrName = attr.name;
            if(this.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                if(this.isEventDirective(dir)){
                    this.compileEvent(node, this.vm, exp, dir);
                }else {
                    this.compileModel(node, this.vm, exp, dir);
                }
            }
        })
    },
    isDirective (attr) {
        return attr.indexOf('v-') === 0;
    },
    compileEvent (node, vm, exp, dir) {
        var eventType = dir.split(':')[1];
        var cb = vm.methods && vm.methods[exp];
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm),false);
        }
    },
    compileModel (node, vm, exp, dir) {
        var val = this.vm[exp];
        this.modelUpdater(node,val);
        new Watcher(this.vm,exp,value => {
            this.modelUpdater(node,value);
        });
        node.addEventListener('input',e => {
            var newValue = e.target.value;
            if(val === newValue) {
                return ;
            }
            this.vm[exp] = newValue;
            val = newValue;
        })
    },
    modelUpdater (node,value,oldValue) {
        node.value = typeof value == 'undefined'?'':value;
    },
    isEventDirective (dir) {
        return dir.indexOf('on:') === 0;
    },
    compileText: function (node, exp) {
        var initText = this.vm[exp];
        // console.log(initText);
        this.updateText(node, initText);
        new Watcher(this.vm, exp, value => {
            this.updateText(node, value);
        });
    },
    updateText (node, value) {
        node.textContent = typeof value === 'undefined' ? '' : value;
    },
    nodeToFragment: function (el) {
        var fragment = document.createDocumentFragment();
        // console.log(fragment);
        // 新拷贝一份，将模板进行html编译，最后将它替换原有的el.innerHTML
        // DocumentFragment 文档碎片 不会留下任何痕迹
        var child = el.firstChild;
        // console.log(child);
        while(child) {
            // console.log(child);
            fragment.appendChild(child);
            // console.log(fragment);
            child = el.firstChild;
        }
        return fragment;
    }
}