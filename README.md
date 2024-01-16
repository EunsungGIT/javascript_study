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
------------------------
## 배열
* push 배열의 끝에 새로운 값 추가
* unshift 배열의 시작에 새로운 값 추가
* pop 끝 값 제거
* shift 시작 값 제거
------------------------
## 객체 (object)
* 데이터 저장소 = 변수(한번에 한가지값), 배열(2개 이상의 값)
* 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이
### 객체 속성 추가와 제거
* delete 객체 속성 제거
* 객체 속성 추가는 변경과 동일
------------------------
## window.location
* 문서의 URL를 관리하는 Location 객체 속성
## window.document, window.open
* window.document.write
* window.document.body
* 현재 창의 문서(document) 읽기, 쓰기, 수정

* window.open(url, target, features)
* 새로운 창을 열거나 새 탭을 생성하는 메서드
------------------------
## DOM(Document Object Model)
* DOM트리를 구성하는 객체 -> 노드(Node)
* HTML 요소를 가리키는 객체 -> HTML 요소 노드
* 텍스트를 가리키는 객체 -> 텍스트 노드
* 탭, 공백, 줄바꿈 -> 공백 노드
### getElementsByTagName
* 지정된 태그 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다.
* HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index] 설정하고 대입하기
* HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기
### DOM Node 변수 지정 시
* HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는 직접적인 접근을 대상을 하나씩 개별인식하게 만들어야한다. [index]
### getElementsByClassName
* 지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다.
### getElmentsById
* 지정된 아이디 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다.
* 아이디는 부모 지정이 필요없음.
### querySelector
* 지정된 아이디, 클래스, 태그 이름을 가진 첫번째 HTML 요소를 찾아 HTML 노드로 반환합니다.
* body에 있는 요소들 기준으로 첫번째만 인식함.
### querySelectorAll
* 지정된 아이디, 클래스, 태그 이름을 가진 첫번째 HTML 요소를 찾아 HTML 노드로 반환합니다.
### Number
* 문자(string) 형식을 숫자(number)로 변환시킬 수 있다.
### value
* form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 -> value속성은 form전용이므로 다른 태그일 때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number) 데이터타입으로 변환해야 한다. ex `Number(객체.value())`
## DOM 관계속성
* parentNode 부모 노드
* parentElement 부모 요소 참조
* childNodes 자식 요소 참조
* firstChild 첫번째 자식 노드
* firstElementChild 첫번째 자식 요소 참조
* lastChild 마지막 자식 노드
* lastElementChild 마지막 자식 요소 참조
## DOM 관계속성
1. parentNode 부모 노드, parentElement 부모 요소
    - parentNode.parentNode 연속 사용 (부모의 부모 잡기)
    - 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서 css 제어하기 -> style 속성
    - DOM.관계.style = "속성:값; 속성:값; 속성:값;";
        * (위) style 2번 이상 생성 시 이전 속성:값 제거됨
    - DOM.관계.관계.style.속성 = "값";
        * (위) style 2번 이상 생성 시 기존 숙성값에 이어서 추가됨
    - DOM.style.속성 = "값";
    - 위 관계는 필요에 따라 선택 속성
3. childNodes 자식 노드, children, chilElementCount 자식의 수
4. innerText, innerHTML
5. firstChild, firstElementChild 첫번째 자식 노드 잡기
6. lastChild, lastElementChild 마지막 자식 노드 잡기
7. 형제 노드 잡기
    - previousSibling, previousElementSibling (이전 형제)
    - nextSibling, nextElementSibling (다음 형제)
# 객체.innerHTML
* `객체.innerHTML;` 특정 객체의 자식, 자손 HTML 읽기
* `객체.innerHTML = 값;` 변경
# innerText
* `객체.innerText;` 객체의 자식, 자손 텍스트 노드 읽기(HTML X)
* `객체.innerText = 값;` 텍스트 노드 삽입 및 변경(HTML X)
# appendChild
* `객체.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성appendChild()`
* `객체.속성.속성.appendChild()`
* 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가
# createElement
* `docoument.createElement()`
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우
------------------------------
## 표현식과 연산자
* 표현식 -> 변수, 함수 등의 값을 바탕으로 계산하는 행위
* 연산자 -> 표현식을 조합하여 더욱 복잡한 표현식을 만들어 계산하는 행위
## 산술 이항 연산자
* a + b 문자 + 문자(연결) 문자 + 숫자(연결) 숫자 + 숫자(더하기)
* a - b 빼기 4-2 = -2
* a * b 곱하기 4*2 = 8
* a / b 나누기 4/2 = 2
* a % b 나머지 4%2 = 0
- 계산할 수 없는 경우는 NaN(Not a Number) 처리 ex) 'two' * 2 =NaN
## 산술 단항 연산자 - 증감연산자
* ++a a에 1을 더한 후 a값을 처리한다
* a++ a를 처리 후 a에 1을 더한다
* --a a에 1을 뺀 후 a값을 처리한다
* a-- a를 처리 후 a에 1을 뺀다
## 산술 대입 연산자
* += a+=b a=a+b 기존 a값에 b를 더하여 a에 대입한다
* -= a-=b a=a-b 
* *= a*=b a=a*b
* /= a/=b a=a/b
* %= a%=b a=a%b
---------------------------------
## 함수 스코프(function-scope) = 지역변수와 전역변수
1. 지역변수(block-scope)
* 함수 내부에서 선언된 변수
* 함수 내에서만 접근 가능
2. 전역변수(global-scope)
* 함수 외부에서 선언된 변수
* 스크립트 전체 어디서든 접근 가능
---------------------------------
## 매개변수와 return
* 함수 호출 시 전달되는 값을 받는 함수 내 생성 변수(재사용되는 함수에서 변경되는 데이터 처리 가능)
-----------------------------------
## 논리데이터(Boolean)
* 참(True) 또는 거짓(False) 두 가지 값 중 하나의 데이터형식 조건문, 논리연산자, 논리적 판단 등에 사용합니다.
## 비교연산자
* 두 값 이상을 비교하여 그 결과를 논리데이터로 반환하는 연산자
    - 일치연산자 (x==y) (x===y)
    - 부등연산자 (x!=y) (x!==y)
    - 대소 비교 연산자 (x < y) (x > y) (x<=y) (x>=y)
    - 논리연산자를 이요한 복합비교연산자 (x>5&&y<30)(x===10||y===15) (&&그리고, ||또는)
## 논리연산자
* 비교연산 또는 논리데이터를 좌우 두 값으로 두고 논리적으로 비교하는 연산자
* 논리 연산자 우선순위 NOT >> AND >> OR
* 논리적인 조건을 결합하거나 변경하는데 사용하는 연산자
    - AND(&&) : 양쪽 피연산자가 모두 참일 때 결과는 참
    - OR(||) : 양쪽 피연산자 중 하나라도 참이면 결과는 참
    - NOT(!) : 피연산자의 논리 값을 반전함. 참이면 거짓 반환
## 조건문 if문
* 주어진 조건에 따라 결과가 참/거짓으로 나뉠 때 참에 대한 결과를 실행합니다.
## if,else
* 특정 조건이 거짓일 때 실행할 코드 블록을 정의합니다.
--------------------------------
## 인라인 > ID > class > Tag
