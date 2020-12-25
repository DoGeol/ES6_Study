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

## 5. 함수의 파라미터

* 함수의 파라미터 Default 지정
    ```
    // Default 값 지정
    function addFunc( a, b = 1 ) {
        console.log( a + b );  
    }
    addFunc(1)                              // result : 1 + 1 = 2
    addFunc(1,2)                            // result : 1 + 2 = 3
    
    // Default 값 function 지정
    function addFunc( a, b = chekcDefault ) {
        console.log( a + chekcDefault );  
    }
    function checkDefault() {
        return 10;
    }
    addFunc(1)                              // result : 1 + 10 = 11
    ```
* Rest 파라미터  
  파라미터를 배열로 담아서 전달해줌 (* arguments랑 비슷하지만 특정 파라미터만 받아 올 수 있음)
    ```
    function restFunc( ...restParam ){
        console.log( restParam );           
    }
    restFunc(1,2,3,4);                      // result : [1,2,3,4]
    restFunc(4,3,2);                        // result : [4,3,2]
    
    // 특정 파라미터랑 분리하여 가져오기
    function restFunc( a,...restParam ){
        console.log( a, ' ::: ', restParam );                     
    }
    restFunc(1,2,3,4);                      // result : 1 ::: [2,3,4]
    restFunc(4,3,2);                        // result : 4 ::: [3,2]
    ```

## 6. Constructor

* 동일한 형식의 오브젝트(인스턴스)를 반복해서 생성하기 위해 사용
    ```
    function Students(name = 'kim') {
        this.name = name;
        this.age = 15;
        this.sayHi = () => {
            console.log(`안녕하세요, ${this.name} 입니다. 나이는 ${this.age} 입니다.`);
        }
    }
    let student01 = new Students('park');
    let student02 = new Students();
    student01.sayHi();                  // 안녕하세요, park 입니다. 나이는 15 입니다.
    student02.sayHi();                  // 안녕하세요, kim 입니다. 나이는 15 입니다.
    ```

* ES6 Class
    ```
    class 부모 {
        constructor() {
            this.name = 'Kim'
        }
    }
    var 자식 = new 부모();
  
    class 할아버지 {
        constructor(name) {
            this.성 = 'Kim';
            this.이름 = name;
        }
        say() {
            console.log('할아버지다');
        }
    }
    class 아버지 extends 할아버지 {
        constructor(name) {
            super(name);                        // 상속받은 constuctor를 가져옴
        }
        say() {
            super.say();                        // constructor 밖에서의 super는 프로토타입 상
            console.log('아버지다');
        }
    }
    let 할아버지1 = new 할아버지('grand daddy');
    let 아버지1 = new 아버지('daddy');
    할아버지1.say();                              // result : 할아버지다.
    아버지1.say();                               // result : 할아버지다. 아버지다.
    ```

## 7. Destructuring 문법

* Array
  ```
  let [a,b,c] = [2,3,4];        // result : a = 2, b = 3, c = 4;
  
  // Default 값을 정해 줄 수 있음
  let [a,b,c = 10] = [2,3];     // result : a = 2, b = 3, c = 10;
  
  // 함수의 파라미터에도 전달 가능
  function test( [name, age] ){
    console.log( name );
    console.log( age );
  }
  
  test( ['Kim', 29] );           // result : name = 'Kim', age = 29
  ```
* Object
  ```
  let { name, age } = { name : 'Kim', age : 30 };       // result : name = 'Kim', age = 30
  
  // Default 값을 정해 줄 수 있음
  let { name, age = 32 } = { name : 'Min' };            // result : name = 'Min', age = 32
  
  // 값을 할당 하는 변수명을 변경 해 줄 수 있음 
  let { name : 이름 , age = 32 } = { name : 'Kim' };     // result : name = undefined, 이름 = 'Kim', age = 32
  
  // 반대로 객체에 할당 가능
  let name = 'Pyeon';
  let age = 29;
  let obj = { name, age };      // result : obj.name = 'Pyeon', obj.age = 29
  
  // 함수의 파라미터에도 전달 가능
  let name = 'Pyeon';
  let age = 29;
  let obj = { name, age };
  
  function test( { name, age } ){
    console.log( name );
    console.log( age );
  }
  
  test(obj);                    // result : name = 'Pyeon', age = 29
  ```