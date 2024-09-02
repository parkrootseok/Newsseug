# 240826 TypeScript 기본

## Ajax의 비동기 요청과 Component

- **Ajax**: 비동기 요청을 통해 페이지의 일부 데이터만 갱신 가능.
- **Component**: 모듈과 유사한 독립된 기능을 제공하는 코드 묶음. 런타임 환경에서 독립적으로 실행 및 배포될 수 있으며, 다른 컴포넌트와의 의존성을 최소화해야 함.

## TypeScript 개요

- **TypeScript**: JavaScript의 Superset 언어로, JavaScript에 새로운 기능과 문법을 추가하여 보완된 언어입니다. 컴파일러를 통해 JavaScript 코드로 변환되어 실행됩니다.
- **정적 타이핑**: TypeScript는 동적 타입 대신 정적 타입을 지원하며, 컴파일 시점에 타입 오류를 발견할 수 있습니다.

## 타입 시스템

- **타입 지정**:

  ```typescript
  const num: number = 123;
  const str: string = 'abc';
  function func(n: number) {
    // ...
  }
  func(num);
  func(str); // 오류 발생
  ```

- **구조적 타이핑**: TypeScript는 타입을 이름이 아닌 구조로 구분하며, 구조가 같으면 서로 다른 타입 간에도 호환이 가능합니다.

  ```typescript
  interface Developer {
    faceValue: number;
  }

  interface BankNote {
    faceValue: number;
  }

  let developer: Developer = { faceValue: 52 };
  let bankNote: BankNote = { faceValue: 10000 };

  developer = bankNote; // 호환 가능
  ```

- **서브타이핑**: 특정 값이 여러 타입에 속할 수 있으며, 객체가 가진 속성을 바탕으로 타입을 구분합니다.

  ```typescript
  interface Pet {
    name: string;
  }

  interface Cat {
    name: string;
    age: number;
  }

  let pet: Pet;
  let cat: Cat = { name: 'Zag', age: 2 };

  pet = cat; // 호환 가능
  ```

## 함수와 클래스

- **함수 타입 지정**:

  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

- **클래스의 타입 지정 및 상속**:

  ```typescript
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class Developer extends Person {
    sleepTime: number;

    constructor(name: string, age: number, sleepTime: number) {
      super(name, age);
      this.sleepTime = sleepTime;
    }
  }
  ```

## 주요 타입

- **Primitive Types**: `boolean`, `number`, `string`, `symbol`, `null`, `undefined`, `bigint`.

- **Object Types**: `Array`, `Tuple`, `Interface`, `Type Alias`.

  ```typescript
  type NoticePopup = {
    title: string;
    description: string;
  };

  interface INoticePopup {
    title: string;
    description: string;
  }
  ```

## 고급 타입 기능

- **타입 가드(Type Guards)**: 특정 조건을 검사하여 타입을 정제하고 타입 안정성을 높이는 패턴.

  ```typescript
  function isString(value: any): value is string {
    return typeof value === 'string';
  }
  ```

- **타입 단언(Type Assertion)**: `as` 키워드를 사용하여 특정 타입으로 강제할 수 있습니다.

  ```typescript
  const input = '123' as unknown as number;
  ```

- **명목적 타이핑(Nominal Typing)**: 이름으로 타입을 구분하는 방식이 아닌, 구조적으로 타입을 구분하는 TypeScript의 특성.

  ```typescript
  interface Cat {
    name: string;
    age: number;
  }

  let cat: Cat = { name: 'Zag', age: 2 };
  ```

- **타입 유니온(Union Types)과 인터섹션(Intersection Types)**:
  ```typescript
  type stringOrNumber = string | number;
  type NameOrAge = { name: string } & { age: number };
  ```

## 기타 특징

- **Value와 Type 공간의 구분**: TypeScript에서는 값과 타입의 공간이 구분되며, 동일한 이름을 사용할 수 있습니다.

  ```typescript
  type Developer = { isWorking: true };
  const Developer = { isTyping: true };
  ```

- **타입 연산자**: `typeof`와 `instanceof` 연산자를 사용하여 타입을 검사할 수 있습니다.

  ```typescript
  const v1 = typeof person; // 'object'
  const v2 = typeof email; // 'function'
  ```

  ```typescript
  let error = unknown;
  if (error instanceof Error) {
    showAlertModal(error.message);
  } else {
    throw Error(error);
  }
  ```

- **TypeScript의 Gradual Typing**: 타입을 명시적으로 지정하거나 생략할 수 있으며, 생략된 경우 TypeScript가 자동으로 타입을 추론합니다.

  ```typescript
  function add(x, y) {
    return x + y;
  }
  ```

## 결론

TypeScript는 JavaScript의 한계를 보완하고, 정적 타입 시스템을 통해 더 안정적이고 유지보수 가능한 코드를 작성할 수 있도록 돕는 강력한 도구입니다. 이를 통해 협업 효율성 또한 크게 향상될 수 있습니다.

# 240827 TypeScript 응용

## any 타입

- **any 타입**은 TypeScript에만 존재하는 타입으로, JavaScript에서의 any와 유사하게 모든 타입의 값을 받을 수 있습니다.
- 모든 JavaScript의 값을 오류 없이 받을 수 있으며, 타입 검사를 우회하는 용도로 사용됩니다.
- 일반적으로 사용을 지양해야 하지만, 개발 초기나 타입을 알 수 없는 상황에서는 유용할 수 있습니다.

  ```typescript
  let state: any;
  state = { value: 0 };
  state = 100;
  state = 'hello world';
  state.foo.bar = () => console.log('this is any type');
  ```

## unknown 타입

- **unknown 타입**은 any와 유사하지만, 더 엄격한 타입 검사를 요구합니다.
- 어떤 값이든 할당할 수 있지만, 내부 속성에 접근하려면 명시적인 타입 검사가 필요합니다.

  ```typescript
  let unknownValue: unknown;
  unknownValue = 100;
  unknownValue = 'Hello World!';
  unknownValue = () => console.log('this is unknown type');

  // 불가
  let someNumber: number = unknownValue;
  ```

## void 타입

- **void 타입**은 반환값이 없는 함수에 주로 사용됩니다.
- JavaScript에서 명시적인 반환문이 없을 때 `undefined`를 반환하는 것과 유사합니다.

  ```typescript
  function showModal(type: ModalType): void {
    feedbackSlice.actions.createModal(type);
  }
  ```

## never 타입

- **never 타입**은 결코 값을 반환하지 않는 경우에 사용됩니다. 주로 오류를 발생시키거나 무한 루프에 사용됩니다.

  ```typescript
  function generateError(res: Response): never {
    throw new Error(res.getMessage());
  }
  ```

## Array 타입

- TypeScript에서 배열 타입은 특정 타입의 값들만을 허용합니다.

  ```typescript
  const array: number[] = [1, 2, 3];
  ```

## Tuple 타입

- **Tuple 타입**은 배열과 유사하지만, 길이와 각 요소의 타입이 고정된 배열입니다.

  ```typescript
  let tuple: [number, string] = [1, 'hello'];
  ```

## enum 타입

- **enum 타입**은 명명된 상수들의 집합을 정의하는 데 사용됩니다. 열거형 값은 자동으로 0부터 시작하며, 명시적으로 값을 할당할 수도 있습니다.

  ```typescript
  enum ProgrammingLanguage {
    TypeScript,
    JavaScript,
    Java,
    Python,
  }
  ```

## 교차 타입 (Intersection)

- **교차 타입**은 여러 타입을 결합하여 하나의 타입으로 만듭니다. 모든 속성을 가지는 새로운 타입을 생성합니다.

  ```typescript
  type ProductItem = {
    id: number;
    name: string;
    price: number;
  };

  type DiscountedItem = ProductItem & { discount: number };
  ```

## 유니온 타입 (Union)

- **유니온 타입**은 여러 타입 중 하나가 될 수 있는 타입을 정의합니다.

  ```typescript
  type StringOrNumber = string | number;
  ```

## 인덱스 시그니처

- **인덱스 시그니처**는 객체의 속성 이름을 알 수 없지만, 속성 값의 타입을 알고 있을 때 사용합니다.

  ```typescript
  interface StringArray {
    [index: number]: string;
  }
  ```

## 제네릭(Generic)

- **제네릭**은 타입을 매개변수로 받아서, 다양한 타입에 재사용 가능한 코드를 작성할 수 있도록 합니다.

  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  ```

## 조건부 타입

- **조건부 타입**은 타입 T가 특정 조건을 만족하면 타입 X를, 그렇지 않으면 타입 Y를 반환합니다.

  ```typescript
  type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;
  ```

## 템플릿 리터럴 타입

- **템플릿 리터럴 타입**은 문자열 리터럴 타입을 기반으로 새로운 문자열 타입을 생성하는 방법입니다.

  ```typescript
  type Stage = 'init' | 'select-image' | 'edit-image';
  type StageName = `${Stage}-stage`;
  ```

## Type 확장하기 & 좁히기

- TypeScript에서는 `extends`와 `Intersection`, `Union` 타입을 활용하여 타입을 확장하거나 좁힐 수 있습니다.

### Type 확장

- 중복되는 타입 선언을 피하고, 기존 타입을 확장하여 새로운 타입을 정의할 수 있습니다.

  ```typescript
  interface BaseMenuItem {
    itemName: string;
    itemImageUrl: string;
    stock: number | null;
  }

  interface BaseCartItem extends BaseMenuItem {
    quantity: number;
  }
  ```

### Type 좁히기 - Type Guard

- Type Guard는 특정 조건을 만족하는지 검사하여 타입을 좁히는 방법입니다. `typeof`, `instanceof`, `in` 연산자를 사용하거나 사용자 정의 타입 가드를 활용할 수 있습니다.

  ```typescript
  function isString(value: any): value is string {
    return typeof value === 'string';
  }
  ```

### Discriminated Unions

- 식별 가능한 유니온 타입을 사용하여 여러 유사한 타입을 구분할 수 있습니다.

  ```typescript
  type TextError = {
    errorType: 'TEXT';
    errorMessage: string;
  };

  type ToastError = {
    errorType: 'TOAST';
    errorMessage: string;
    duration: number;
  };
  ```

### Exhaustiveness Checking

- 모든 경우의 수를 처리하도록 보장하는 패턴으로, TypeScript에서 타입 분기를 철저히 처리할 수 있도록 돕습니다.

  ```typescript
  function exhaustiveCheck(param: never): never {
    throw new Error('Unhandled case');
  }
  ```

### Generic 활용

- 제네릭과 `extends`, `infer`를 활용하여 타입을 확장하거나 추론할 수 있습니다.

  ```typescript
  type UnPackPromise<T> = T extends Promise<infer K> ? K : any;
  ```

이 문서에서는 TypeScript의 고급 타입 기능과 이를 활용한 다양한 패턴에 대해 설명합니다. 각 기능은 실무에서 타입 안정성을 높이고, 코드 재사용성을 향상시키는 데 유용하게 사용될 수 있습니다.
