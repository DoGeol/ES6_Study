/* 1. 이미지 성공 & 실패 */
let $container = document.querySelector('#container');
let $test = document.querySelector('#test')

let promise = new Promise(function (resolve, reject){
    $test.addEventListener('load', ()=>{
        resolve();
    })
    $test.addEventListener('error', ()=>{
        reject();
    })
});

promise.then(function () {
    console.log('이미지 로딩 성공');
}).catch(function (){
    console.log('이미지 로딩 실패');
})

// /* 2. Ajax 요청 성공 시 코드 실행 */
// let promise02 = new Promise(function (resolve, reject){
//     fetch('https://codingapple1.github.io/hello.txt').then(function (res){
//         resolve(res);
//     }).catch(function (res) {
//         reject(res);
//     })
// });
//
// promise02.then(function (result) {
//     console.log('성공 ::: ', result.body);
//     return new Promise(function (resolve, reject) {
//         fetch('https://codingapple1.github.io/hello2.txt').then(function (res) {
//             resolve(res);
//         }).catch(function (res) {
//             reject(res);
//         })
//     });
// }).then(function (returnValue) {
//     console.log('성공 2 ::: ', returnValue);
// }).catch(function (result) {
//     console.log('실패 ::: ', result);
// });

/* 2. Ajax 요청 성공 시 코드 실행 */
let promise02 = new Promise(function (resolve, reject){
    $.get('https://codingapple1.github.io/hello.txt').done(function(res){
        resolve(res);
    }).catch(function (res){
        reject(res);
    });
});

promise02.then(function (result) {
    console.log('성공 ::: ', result);
    return new Promise(function (resolve, reject) {
        fetch('https://codingapple1.github.io/hello2.txt').then(function (res) {
            resolve(res);
        }).catch(function (res) {
            reject(res);
        })
    });
}).then(function (returnValue) {
    console.log('성공 2 ::: ', returnValue);
}).catch(function (result) {
    console.log('실패 ::: ', result);
});

