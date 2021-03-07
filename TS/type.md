## 기본 타입

```TS
//Boolean
let done: boolean = true;


//Number 16진수, 10진수 리터럴, 2진수, 8진수 리터럴도 지원
let num: number = 4;
let hex: number = 0xf00d;
let binary: number = 0b1010;


//String
let color: string = "red"; //'red'

let name: string = "Jesica";
let age: number = 30;
let sentence: string = `hi, my name is ${name}. I ${age} years.`;



//Array
let list: number[] = [0,1,2]; //타입 뒤에 []

let list: Array<number> = [1,2,3]; //제네릭 배열 타입




//Tuple
let a: [string, number];

a = ["hi", 10] //초기화

a = [10, "hi"] //오류, 잘못된 초기화



//열거 (Enum) 기본적으로 0부터 시작하여 번호를 매김
enum Color {red, green, blue}
let c: string = Color[1];

console.log(c); //값이 1인 green이 출력.




//Any 알지 못하는 타입을 표현할 때, 타입 검사를 하지 않기 위해 any 타입을 사용할 수 있다.

let not: any = 5;
not = "maybe string";
not = true;

//any와 비슷한 역할인 Object가 있지만 Object로 선언된 변수들은 오직 어떤 값이든 그 변수에 할당할 수 있게 해주지만 임으로 호출할 수 없다.

let sure: any = 12;
sure.ifItExists(); //성공
sure.toFixed(); //성공

let prettySure: Object = 3;
prettySure.toFixed(); //오류, 존재하지 않는다.

//any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용. 여러 다른 타입이 섞인 배열을 다룰 수 있다.
let list: any[] = [1, false, "one"];

list[1] = 100;




//Void 어떤 타입도 존재할 수 없음을 나타냄. any의 반대 타입. 보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 쓰인다.
function user(): void {
    console.log("this is message");
}

//void를 타입 변수로 선언하는 것은 유용하지 않다. 그 변수에는 null 또는 underfined만 할당할 수 있기 때문
let x: void = undefined;
x = null;




//Null, Undefined
let u: undefined = undefined;
let n: null = null; //이 밖에 이 변수들에 할당할 수 없는 값이 없다.



//Never 절대 발생할 수 없는 타입. 모든 타입에 할당 가능한 하위 타입이지만 어떤 타입도 never에 할당할 수 있거나 하위 타입이 아니다.

//never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

//반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

//never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while(true) {

    }
}



//Object, 원시 타입이 아닌 타입.

declare function create(o: object  | null): void;

create({ prop: 1});
create(null);

create(31) //오류
create("string"); //오류
create(false); //오류
create(undefined); //오류



//타입 단언 (Type assertions) 컴파일러가 가진 정보를 무시하고 프로그래머가 원하는 임의의 타입을 값에 할당하고 싶을 때 필요한 것.

//"angle-bracket" ansqjq
let value: any  = "this is string";

let length: number = (<string>value).length;


//as 문법 (많이 쓰이는)
let value: any = "this is string";

let length: number = (value as string).length;




```
