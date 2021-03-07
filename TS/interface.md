타입 검사가 값의 형태에 초점을 맞추고 있는 TS에서 인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하며 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 방법.

```TS
function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

let myObj = {size: 5, label: "Size 5 Object"};
printLabel(myObj);
```

타입 검사는 printLabel 호출을 확인. 이 함수는 string 타입 label을 갖는 객체를 하나의 매개변수로 가진다.

```TS
interface labelValue {
    label: string;
}

function printLabel(labelObj: labelValue) {
    console.log(labelObj.label);
}

let myObj = {size: 5, label: "Size 5 Object"};
printLabel(myObj);

```

labelValue 인터페이스는 앞 예제의 요구사항을 똑같이 기술하는 이름으로 사용할 수 있다.
이 인터페이스는 여전히 문자열 타입의 label 프로퍼티 하나를 가진다는 것을 의미.

## 선택적 프로퍼티 (Optional Properties)

인터페이스의 모든 프로퍼티가 필요한 것은 아니다. 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 option bags 같은 패턴을 만들 때 유용.

```TS

interface SquareConfig {
    color?: string;
    width?: number; //선택적 프로퍼티를 나타냄
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시.
선택적 프로퍼티의 장점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서 사용 가능한 속성을 기술하는 것.

## 읽기 전용 프로퍼티 (Readonly properties)

일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야 한다. readonly를 넣어서 이를 지정할 수 있다.

```TS
interface Point {
    readonly x: number;
    readonly y: number;
}
```

객체 리터럴을 할당하여 Point를 생성.

```TS
let p1: Point = { x: 10, y: 20};
p1.x = 5; //오류
```

TS에서는 모든 변경 메서드가 제거된 Array<T>와 동일한 ReadonlyArray<T> 타입을 제공. 생성 후에 배열을 변경하지 않음을 보장할 수 있다.

```TS
let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
ro[0] = 19; //오류
ro.push(6); //오류
ro.length = 60; //오류
a = ro; //오류

```

마지막 줄에서 ro를 일반 배열에 재할당이 불가능한 것을 확인할 수 있다. 하지만 타입 단언으로 오버라이드하는 것은 가능.

```TS
a = ro as number[];
```
