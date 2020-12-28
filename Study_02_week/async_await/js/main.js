/* 클릭하면 성공하는 Promise 함수 생성*/
const $testBtn01 = document.querySelector('.test_btn_01');
$testBtn01.addEventListener('click', clickToBtn);

async function clickToBtn(e) {
    e.preventDefault();
    let test01 = new Promise((resolve, reject) => {
        // resolve('성공');
        reject('실패');
    });
    try{
        let result = await test01;
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}