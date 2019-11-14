
# 자바스크립트 ES6

## 1) 변수 : 변할 수 있는 값.
    선언 시 초기값을 할당하지 않으면 암묵적으로 undefined를 할당.
        1. let (NEW ES6)
        2. var
## 2) 상수
       * NEW ES6 
       * 자바의 final과 동일
       * 상수 선언 시 대문자와 밑줄만 사용하는 것이 관례
       * 가능하다면 변수보다 상수를 사용하자.
       * ex) const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

## 3) 식별자(identifier)
      변수와 상수, 함수 이름을 부르는 말.
    
       식별자는 몇 가지 규칙이 따른다.
       * 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야 함.
       * 식별자에는 글자와 숫자, 달러 기호, 밑줄만 쓸 수 있음.
       * π나 σ같은 유니코드 문자도 쓸 수 있음.

## 4) null과 undefined
      null과 undefined는 모두 존재하지 않는 것을 나타냄.
      변수의 값을 아직 모르거나 적용할 수 없는 경우에는 대부분 null이 더 나은 선택!

      -----------------------------------------------------------------------------

      let currentTemp;          // 암시적으로 undefined
      const targetTemp = null;  // 대상 온도는 null, 즉 "아직 모르는 값"
      currentTemp = 19.5;       // currentTemp에 값 대입
      currentTemp = undefined;  // currentTemp는 초기화되지 않은 상태. 권장하지 않음.

## 5) 데이터 타입 변환
    1. 문자열을 숫자로 바꿔야 할 경우 -> Number 객체 생성자 사용

      const numStr = "33.3';
      const num = Number(numStr); // 이 행은 숫자 값을 만듦.
                                  // Number 객체의 인스턴스가 아님!
    
    2. 내장 함수 parseInt, parseFloat 함수 사용

        parseInt : 기수(radix)를 넘길 수 있음.
                   * radix : 변환할 문자열이 몇 진수 표현인지 지정. 기본값은 10이지만, 항상 기수를 명시하는 것을 권장.
                             ex) 16진수로 변환할 때 -> 기수로 16을 넘김.
        
        parseInt, parseFloat는 모두 숫자로 판단할 수 있는 부분까지만 변환하고,
        그 뒤에 있는 문자열은 무시.

        const a = parseInt("16 volts", 10); // "volts"는 무시됨. 10진수 16
        const b = parseInt("3a", 16);       // 16진수 3a를 10진수로 바꿈. 결과는 58.
        const c = parseFloat("15.5 kph")    // "kph"는 무시됨. parseFloat는 항상 기수가 10이라고 가정

    3. 숫자를 문자열로 바꿔야 하는 경우 (많지는 않음) -> toString() 메서드 사용.

        const n = 33.5;
        n;                      // 33.5 - 숫자
        const s = n.toString();
        s;                      // "33.5" - 문자열