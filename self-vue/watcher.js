function Watcher (vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();
}
Watcher.prototype = {
    get () {
        Dep.target = this;
        var value = this.vm.data[this.exp];
        // console.log(this.exp);
        // console.log(this.cb);
        Dep.target = null;
        return value;
    },
    update () {
        this.run();
    },
    run () {
        var value = this.vm.data[this.exp];
        // console.log(value);
        var oldVal = this.value;
        // console.log(oldVal);
        if(value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
}