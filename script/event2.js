// 문자열 변환 메서드
// let price = 10000
// 계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString() 사용한다.
// console.log(price.toLocaleString('ko-kr'))
// HTMLNode.value = price.toLocaleString('ko-kr')

const bank_input = document.querySelector('#bank_input');
const bank_total = document.querySelector('#bank_total');
const bank_btn = document.querySelector('#bank_btn');
let total = 10000;
bank_total.value = total.toLocaleString('ko-kr');
bank_btn.addEventListener('click', function(){
    let bank = (Number(bank_input.value)+100);
    total += bank;
    bank_total.value = total.toLocaleString('ko-kr');
    bank_input.value = '';
});