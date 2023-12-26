# javascript(ECMAScript)
* 절차를 순서대로 작성해 나가는 절차적 언어
* 데이터와 절차를 묶어 객체 단위로 관리하는 객체 지향 언어
* 프로그램 함수를 조합하여 구현해 나가는 함수형 언어
* 데이터 사이의 관계와 논리를 설명해가는 논리형 언어
## 자바스크립트 작성위치
* `<head>`, `<body>` 내에 `<script>` 작성 가능
* 내부 스크립트 `<script>...</script>`
* 외부 스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`, `async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `+` : 대입연산자 `let X = data`
2. `=` : 연결연산자 `X + '1'`
3. `+=` : 복합대입연산자 `X += Y` -> `X = X+Y`
----
1. Object(객체)
* 사용자가 컨트롤 할 수 있는 객체대상
2. Property(속성)
* 객체가 가지는 속성
3. Event(이벤트)
* 인터넷 브라우저에 발생할 수 있는 사건
4. Method(메소드)
* 객체의 실행
----
## async와 defer 차이점 체크
* <script src="script1.js" async></script>
* <script src="script1.js" defer></script>
----
## function 함수명(){재사용문법}
* 특정 기능을 하는 구문을 묶어 재사용하는 문법 == 함수
----
* 프로그래밍을 작성하는데 가장 중요한 요소 알고리즘을 표현하기 위한 필수 요소 데이터 값을 저장하는 저장소
----
## 변수 작성하기
* 변수의 이름은 문자(a~z, A~Z), 숫자(0~9), 달러($), 밑줄(_)이 포함됩니다.
* 변수의 이름은 숫자로 시작할 수 없슨디ㅏ.
* 변수의 이름은 대시(-)나 마침표(.) 기호를 사용할 수 없습니다.
* 키워드나 예약어는 사용할 수 없습니다.
* ex) class, delete, var, this, false, true, if, continue, case, default, var, new 등
* 모든 변수는 대/소문자를 구별합니다. score와 Score는 다른 변수!
* 변수가 저장할 정보의 종류를 표현하는 단어를 사용합니다.
----
## 데이터 타입 분류
* 원시 타입(primitive type) -> 데이터를 구성하는 가장 기본적 요소 숫자, 문자열, 논리값, undefined, null, Symbol
* 객체 타입(reference type) -> 참조 타입에 따라 할당되는 복합 데이터 타입 array, function, dom 등
### 숫자 데이터
* 64비트 부동소수점으로 표현됩니다.
* 수학연산, 비교연산, 조건문, 반복문 등 많은 정밀도 계산에 활용
* C, C++, Java, Python, Javascript, Windows, macOS, Linux
### 문자 데이터
* 16비트 유니코드(UTF-16) 전세계 사용 문자 대부분 표현 가능
* 작은따옴표('') 큰따옴표("") 문자열의 앞 뒤에 붙여서 표현합니다.
### 특수 데이터
* 값을 아직 할당하지 못한 변수
* 없는 객체의 속성을 읽으려 시도했을 때 값
* 없는 배열 요소를 읽으려 시도했을 때 값
* 아무것도 반환하지 않은 함수가 반환한 값
* 함수를 호출했을 때 전달받지 못한 인수 값
### 템플릿 문자열 ECMAScript 6
* 백틱기호(`)로 묶으며 ${}를 이용한 식으로 문자열을 간편하게 쓰는 기법
### 배열 생성과 호출
* let 변수명 = [배열, 배열, 배열 ...]
* let 변수명 = new Array(배열, 배열, 배열 ...)
* let 변수명 = new Array(3)