#1주차
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
      
     