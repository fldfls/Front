## 예외와 기본 예외 처리 
 프로그램을 실행하는 동안 문제가 발생하면 프로그램이 자동으로 중단됨. 이렇게 발생한 오류를
 예외(exception)라고 하며, 이러한 오류에 대처할 수 있게 하는 것을 예외 처리라고 한다. 

 잘못된 코드를 작성했을 수도 있고, 사용자가 개발자가 원하지 않는 방향으로 프로그램을 사용했을 수도 있다. 
 
 예외는 기본 예외 처리와 고급 예외 처리 두 가지 방법으로 처리한다.
 - 예외가 발생하지 않게 사전에 해결하는 것을 기본 예외 처리. 


## TypeError 기본 예외 처리 

1. 예외 상황 확인하기 
 자바스크립트에는 underfined 자료형이 있다. 이러한 자료형을 일반적인 객체 또는 함수처럼 다루면 TypeError 예외가 발생. 
2. 기본 예외 처리하기 
 사전에 이러한 데이터가 underfined인지 조건문으로 확인하기만 해도 예방할 수 있음. 


## 고급 예외 처리 
- try 키워드, catch 키워드, finally 키워드로 예외를 처리하는 방법. 이를 try catch finally 구문이라 한다. 

```JS
    try {
        //예외가 발생하면 
    } catch (exception) {
        // 여기서 처리.
    } finally {
        //여기는 무조건 실행.
    }

```

1. 예외 상황 확인하기 
 배열을 생성할 때 길이를 음수로 지정하면 RangeError가 발생. 

 ```JS
    //예외를 발생시킵니다. 
    const array = new Array(-2000);
 ```




 2. 고급 예외 처리하기 
  try catch finally 구문을 사용해 예외를 처리합니다.

```JS
 try {
     //예외를 발생시킵니다. 
     const array = new Array(-2000);
 } catch (exception) {
     console.log('${exception.name} 예외가 발생했습니다.');
 } finally {
     console.log('finally 구문이 실행되었습니다.');
 }
```


## 예외 객체 
- 예외가 발생하면 어떤 예외가 발생했는지 정보를 함께 전달받을 때 
 예외 객체는 catch 구문의 괄호 안에 들어 있는 변수를 나타낸다. 

예외 객체에는 name 속성과 message 속성이 있다. 어떤 예외인지 코드 내부에서 확인할 수 있다. 

ReferenceError를 발생시킨 이후에 예외 객체의 name 속성과 message 속성을 출력. 
```JS
    try {
        //예외를 발생시킵니다. 
        error.error.error();
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    }
/*결과 -> ReferenceError
          error is not defined */
``` 


## 예외 강제 발생
- 예외를 강제로 발생시킬 때는 throw 키워드를 사용. throw 키워드 뒤에는 문자열 또는 Error 객체를 입력. 
```JS
 throw '강제 예외' ;
 ```

조금 더 자세하게 예외를 출력하고 싶을 때는 Error 객체를 사용. 

```JS
 //예외 객체를 만듭니다. 
 const error = new Error('메시지');
 error.name = '내 마음대로 오류';
 erro.message = '오류의 메시지';

 //예외를 발생시킵니다. 
 throw error;
```
Error 객체를 사용하면 어떤 파일의 몇 번째 줄에서 예외가 발생했는지도 확인할 수 있다.

- Error 객체를 사용한 예외 강제 발생 때의 예외 객체 
```JS
try{
    // 예외 객체를 만듭니다. 
    const error = new Error('메시지');
    error.name = '내 마음대로 오류';
    error.message = '오류의 메시지';

    //예외를 발생시킵니다. 
    throw Error;
} catch (exception) {
    // 예외 객체를 출력합니다. 
    console.log('${exception.name} 예외가 발생했습니다.');
    console.log(exception.message);
}
/*결과 -> 내 마음대로 오류 예외가 발생했습니다. 
          오류의 메시지*/
```

