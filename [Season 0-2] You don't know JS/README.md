# You Don't know JS

## 1회 20191102

### 공유거리

#### typeof null === 'object'

- https://2ality.com/2013/10/typeof-null.html
- [[번역]](https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC)

#### Infinity, Infinity

- https://stackoverflow.com/questions/18838301/in-javascript-why-does-zero-divided-by-zero-return-nan-but-any-other-divided-b

### 마무리

- 역할 정비
  - 일정공지(다운님)
    - 자동화가 가능하지 않을까?
  - 당일 나온 공유거리들 정리(지희님)
- 책을 다 뗀 후, PR로 후기 남겨보자

---

## 2회 20191109

### 공유거리

#### 후미콤마

> _Tip. 후미콤마를 사용했을때 장점_
>
> - diff 가 이뻐진다.
>
> ```javascript
> const obj = {
> a: 1
> };
>
> const obj = {
>  + a: 1,
>  + b: 2
> };
> // 2줄 수정
> ```
>
> ```javascript
> const obj = {
> a: 1,
> };
>
> const obj = {
> a: 1,
> + b: 2,
> };
> // 1줄 수정
> ```

#### RegExp()

리터럴 형식으로 사용하는것을 권한다.
정규표현식 사용시 생성자로 사용하는것과 리터럴형식으로 사용하는것으로 코드리뷰시 의견이 나뉘었다.
(리터럴 사용시 이스케이핑 문자(`\`)가 겹치는 경우)

#### Function()

> eval()과 Function()
>
> - https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing
> - https://logical-code.tistory.com/102

#### Error()

```javascript
var a = new Error("2");
a.message; // '2'
```

> - <https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event>
> - sentry](https://sentry.io/welcome/): 에러가 발생하는 정보를 특정 서버에 전송하여 모아 볼수있도록 하는것

#### 네이티브 프로토타입

```javascript
Array.isArray(Array.prototype); // true
Array.prototype.push(1, 2, 3);

var a = [1];

a[0]; // 1
a[1]; // 2 : Array.prototype을 타고올라가서 2를 가져온다.
```

```javascript
 구문을 통해 인지의 디폴트 값을 설정할 수 있다.
function isThisCool(vals, fn, rx) {
  vals = vals || Array.prototype;
  fn = fn || Function.prototype;
  rx = rx || RegExp.prototype;

  ...
}

function isThisCool(vals = [], fn = () => {}, rx = /(?:)/) {
  ...
}
```

프로토타입의 디폴트값은 수정이 불가능하다.

```javascript
Object.getOwnPropertyDescriptor(Array, "prototype");
// configable: false
// enumerable: false
// writable: false
```

> <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype>

---

## 3회 20191115

### 공유거리

#### 비트연산

- _10진수 14_

> 10의 0승 = 4
>
> 10의 1승 = 10
>
> 10 + 4 = 14

- _2진수 4_

| 2²  | 2¹  | 2   |
| --- | --- | --- |
| 1   | 0   | 0   |

`NOT연산을 하게되면`

| 2²  | 2¹  | 2   |
| --- | --- | --- |
| 0   | 1   | 1   |

> 1 : true / 0 : false
> AND : *둘 다 true*면 true
> OR : _둘 중 하나만_ true여도 true
> XOR : _두 개가 다르면_ true

#### parseInt

parseInt를 css핸들링할 때 사용.

> css핸들링 관련
> https://emotion.sh/docs/introduction

`두 번째 인자가 없으면 무조건 10진수로 처리하는데,` 내용수정.

> - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
> - https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md#explicitly-parsing-numeric-strings
> - https://github.com/getify/You-Dont-Know-JS/issues/373

#### {} + [] = 0

> https://stackoverflow.com/questions/11939044/why-does-return-0-in-javascript

#### 어려운 코드와 쉬운 코드

> https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3

#### Optional Chaining for JavaScript

```javascript
var fooValue = fooInput ? fooInput.value : undefined;
```

```javascript
var fooValue = fooInput?.value;
```

> https://github.com/tc39/proposal-optional-chaining

---

## 4회 20191123

### 공유거리

#### 문과 표현식

> https://www.youtube.com/watch?v=WVyCrI1cHi8

#### 부수효과

리턴되는 값(결괏값) 이 외에 다른 값이 변경하는 효과가 있다.
a++의 결괏값은 현재의 a값 이지만, 이후에 a에 1을 더해 a의 값을 변경하기 때문에 부수효과라고 한다.

#### 레이블

`https://www.11ty.io/docs/config/#data-deep-merge`가 에러가 아닌 이유 :
`http:`는 레이블로, `//www.11ty.io/docs/config/#data-deep-merge`는 주석으로 해석한다.
> https://github.com/GoogleChrome/web.dev/pull/1494

#### _.cond (삼항연산자 중첩)

> https://lodash.com/docs/4.17.15#cond

#### 세미콜론을 사용하지 않는 formatter

> https://standardjs.com/

#### TDZ와 호이스팅

호이스팅이란 코드에 있는 변수 선언을 코드상에 맨 위로 올리는 게 아니라, 컴파일 단계에서 단지 변수를 미리 선언하는 것이다.
```javascript
var a = 2;
var b = a + b + 5;
b // NaN

let c = a + c + 5;
// Uncaught ReferenceError
```
> https://developer.mozilla.org/ko/docs/Glossary/Hoisting

#### 함수인자

Arrow function에서는 arguments를 사용할 수 없다.
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
