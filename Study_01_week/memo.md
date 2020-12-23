# 1주차

## 2020. 12. 20 (일요일)

1. use strict를 사용하면 function 안의 this는 **undefined**
2. object 안의 함수에서 this는 **함수를 가지고 있는 오브젝트(상위 부모)를 뜻**
    * Arrow Function 특징 : **object 안의 함수의 this도 함수 밖(상위 부모)의 this를 사용**

## 2020. 12. 21(월요일)

1. Template literals
    * tagged literal  
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

## 2020. 12. 23(수요일)

1. Reference data type
   ```
   // [CASE 1] 
   var obj = { name : '김' };
   function changeName( data ) {
      data.name = 'park'; 
   } 
   changeName( obj );
   console.log( obj.name );         // result : 'park';
   
   // [CASE 2]
   var obj = { name : '김' };k
   function changeName( data ) {
      data = { name : 'park' }; 
   } 
   changeName( obj );
   console.log( obj.name );         // result : '김';
   ```
   CASE2에서 obj가 변경되지 않는 이유는 함수의 `data = { name : 'park' };` 부분에서 재할당되기 때문에 CASE1과는 다르게 할당 주소를 끊고 재할당 해주기 때문에, obj 값이
   변경되지 않고 data에 새로운 주소로 name 값이 할당 된다.