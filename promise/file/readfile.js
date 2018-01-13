
const rf=require("fs");  
// js是异步的，回调函数
// node 异步无阻塞 提高性能 降低服务器的需求
// 异步 同步
// const data1 = rf.readFileSync("input.txt","utf-8");
// console.log(data1);
// const data2 = rf.readFileSync("input2.txt","utf-8");
// console.log(data2);
// const data3 = rf.readFileSync("input3.txt","utf-8");
// console.log(data3);
// rf.readFileSync("input2.txt", (err, data) => {
//     if(err) {      
//         return console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// })
// rf.readFileSync("input3.txt", (err, data) => {
//     if(err) {      
//         return console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// })
// 回调地狱
// rf.readFile('input.txt',function(err, data) {
//     console.log(data.toString());
//     rf.readFile('input2.txt', function(err,data){
//         console.log(data.toString());
//         rf.readFile('input3.txt',function(err,data){
//             console.log(data.toString());
//         })
//     })
// });
function readFile1() {
    return new Promise((resolve,reject) => {
        rf.readFile('input.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}
function readFile2() {
    return new Promise((resolve,reject) => {
        rf.readFile('input2.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}
function readFile3() {
    return new Promise((resolve,reject) => {
        rf.readFile('input3.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}
readFile1().then(data => {
    console.log(data.toString());
    return readFile2();
}).then(data => {
    console.log(data.toString());
    return readFile3();
}).then(data => {
    console.log(data.toString());
});
// readFile2().then(data => {
//     console.log(data.toString());
// });
// readFile3().then(data => {
//     console.log(data.toString());
// });

   