# ES6_Study
## 목표
 1. ES6 문법 정리
 2. Git Pull Request 활용하여 강의 진행
 3. README.md에 강의 정리하여 Markdown 익숙해지기
***
##1. Arrow Function
* 함수 생성 시 소괄호 생략 가능
   
    ``let func = a => { return a + 10 };``


* 코드 한줄이면 중괄호도 생략 가능

    ``let func = a => a + 10;``


* 콜백 함수에서도 사용 가능
    ```
      [1,2,3,4].forEach( (a) => {
            console.log(a);
      });
  
      [1,2,3,4].forEach( a => console.log(a); );
    ```