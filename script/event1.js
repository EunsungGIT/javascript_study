//총 수입 버튼을 클릭 시 월급+보너스 더한 결과가 팝업으로 출력
//결과 예시) 총 수입은 0000000원 입니다.
const input_pay = document.querySelector('#result1')
const input_bonus = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(input_bonus, input_pay, answer_btn) //변수 정상 확인
answer_btn.addEventListener('click', function(){
    console.log('.') //이벤트 정상 확인
    console.log(input_pay.value, input_bonus.value) //값 정상 확인
    console.log(input_pay.value+input_bonus.value) //더하기 확인
    console.log(typeof(input_pay.value+input_bonus.value)) //계산이 안되는 문제(데이터) 확인 => string => 문제해결(Number)
    let total = Number(input_pay.value)+Number(input_bonus.value)
    //결과를 담는 변수 생성 후 대입
    console.log(total) //결과 변수 정상 작동 확인
    window.alert(`총 수입은 ${total}원 입니다.`)
})

//자바스크립트 은행
//입금 전 잔액 : 10000원 (버튼 클릭 전 미리 보이는 값)
//입금액(자유) 입금 시 마다 +100원이 더해져서 총 잔액에 포함
//입금 시 잔액 포함은 버튼 클릭 시 실행되는 구조
const input_bank = document.querySelector('#bank_input')
const input_total = document.querySelector('#bank_total')
const deposit_btn = document.querySelector('#bank_btn')
let result = 10000
console.log(input_bank, input_total, deposit_btn)
input_total.value = result
deposit_btn.addEventListener('click', function(){
    console.log(Number(input_bank.value)+100)
    console.log((Number(input_bank.value)+100)+result)
    let bank_total = Number(input_bank.value)+100
    result += bank_total; //total = total+input_total
    input_total.value = result;
    //입금액 입력값 초기화
    input_bank.value = '';
})