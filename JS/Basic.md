## 식별자 : 이름을 붙일 때 사용. (변수와 함수 이름 등)

- 키워드를 사용하면 안 됩니다. 
- 특수 문자는 _와 $만 허용. 
- 숫자로 시작하면 안 됩니다. 
- 공백은 입력하면 안 됩니다. 



## 주석 : 프로그램의 진행에 전혀 영향을 주지 않는 코드로 프로그램을 설명할 때.

한 줄 주석 처리 //주석 

여러 줄 주석 처리 

/*
주석
.
.
.
*/


## 출력 : 무엇을 하는지 알 수 있도록 메시지를 출력하는 기본 방법 

console 객체의 log() 메소드를 사용. 




## 문자열 : 문자의 집합 

'안녕하세요.'

- 연결 연산자 
 ex) 
```JS 
console.log("가나다" + "라마" + "바사아" + "자차카타" + "파하");
-> 가나다라마사아자차카타파하 

```

## 자료형 검사 : 변수의 자료형을 확인하는 

- typeof 연산자를 사용 

> typeof 10
'number'
> typeof "안녕"
'string'



## let VS var 
'변수의 스코프' 차이. let 변수는 해당 블록 내부에서만 사용할 수 있지만 
var 변수는 모든곳에서 사용할 수 있다. 그러나 var 변수는 절대 사용하지 않는 것이 좋다. 
과거에는 let 변수가 없어서 var를 사용한 것이고, 이로 인해 스코프 문제가 많이 발생했다. 

