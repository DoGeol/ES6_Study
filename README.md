# ES6_Study
## 목표
 1. ES6 문법 정리
 2. Git Pull Request 활용하여 강의 진행
 3. README.md에 강의 정리하여 Markdown 익숙해지기
***
## 1. Arrow Function
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

## 2. let, const
* let
  1. 재선언 불가능
  2. 재할당 가능
  3. 범위 : 중괄호 {} 안
    
* const
  1. 재선언 불가능
  2. 재할당 불가능 
     * 오브젝트 변수를 만들어서 내부 값을 변경 가능
  3. 범위 : 중괄호 {} 안

## 3. Template literals
* backquote 문자열의 장점
  1. 줄 개행 가능
     * 템플릿 생성에 활용 가능   
     ```
     let text = `안녕하세요, 
                 저는 ${name}입니다.`;
     
     let template = `<div>${변수}</div>`;
      ```
  2. 중간에 변수 추가 가능  
      ```
      let name = '손흥민';
      let text = `안녕하세요, 저는 ${name}입니다.`;
      ```
  3. tagged literal  
     함수에 backquete(백틱)으로 생성된 문자를 '문자'와 '변수'로 나누어 받을 수 있음
      ```
      let name = '손흥민';
      let job = '축구선수';
      let text = `안녕하세요, ${name} 입니다. 제 직업은 ${job} 이에요.`;
     
      function textSpliter(text, val1, val2) {
        console.log(text);  // array type : ["안녕하세요, "," 입니다. 제 직업은 ", " 이에요."]
        console.log(var);   // string type : ["손흥민"]
        console.log(var);   // string type : ["축구선수"]
      }
       
      function textSpliter(text, ...val) {
        console.log(text);  // array type : ["안녕하세요, "," 입니다. 제 직업은 ", " 이에요."]
        console.log(var);   // array type : ["손흥민", "축구선수"]
      }
      ```
     
## 4. Spread Operator
* 쉽게 말하면 중괄호, 대괄호를 없애주는 역할  
* Deep Copy에 유용하게 쓰임 
  ```
  let array = ['hello', 'world'];
  console.log(...array);    // result : 'hello world';
  console.log(...array[0]); // result : 'h' 'e' 'l' 'l' 'o';
  
  let array1 = array        // Reference Copy
  let array2 = [...array]   // Deap Copy
  
  array1[2] = 'welcome';
   
  console.log(array);       // result : ['hello', 'world', 'welcome']           
  console.log(array1);      // result : ['hello', 'world', 'welcome']
  console.log(array2);      // result : ['hello', 'world']
        
  let obj = {
    a : 1,
    b : 2
  }
  
  // 객체타입도 동일
  let obj = {
      a : 1,
      b : 2
  }
  
  let obj1 = obj                   // Reference Copy
  let obj2 = {c : 3, ...obj}       // Deap Copy
  
  obj1.c = 5;
  
  console.log(obj);                // result : {a: 1, b: 2, c: 5}
  console.log(obj1);               // result : {a: 1, b: 2, c: 5}
  console.log(obj2);               // result : {c: 3, a: 1, b: 2}
  ```
* 함수의 파라미터 간소화
  ```
  let calArray = [1,2,3]
  
  function cal_add(a,b,c) {
    console.log(a+b+c);
  }
  
  // SAME
  cal_add(calArray[0],calArray[1],calArray[2]);
  cal_add(...calArray);
  ```