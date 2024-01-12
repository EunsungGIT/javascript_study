//1. 'admin' 아이디만 접근할 수 있는 페이지
let userId = 'admin'
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}
//2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지
let userPw = '1234'
if(userId = 'admin' && userPw=='1234'){
    console.log('관리자님 어서오세요')
}
//3. 사용자의 아이디를 입력받고 admin이 아니면 일반회원입니다.
/* const userIdInput = prompt('아이디를 입력하세요')
if(userIdInput != 'admin' ){
    console.log('일반 회원입니다')
} */
/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0){
    console.log('짝수!')
}
if(userNum%2){
    console.log('홀수!')
}
if(true){

} */
//if(1) {}
//if(true) {}
//5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승불가!
/* const userAge = prompt('나이가 어찌 되세요?')
if(userAge < 10){
    alert('탑승불가!')
} */
//6. 10살 이상이면서 키가 120 이상인 애만 탈 수 있는 놀이기구
//나이와 키를 물어보고 조건이 맞으면 '탑승가능'
/* const userAge = prompt('나이')
const userHeight = prompt('키')
if(userAge >= 10 && userHeight >= 120){
    alert('탑승가능')
} */
const printBtn = document.querySelector('#printBtn')
printBtn.addEventListener('click', function(){})
printBtn.addEventListener('click', ()=>{
    let qu = confirm('인쇄할까요?')
    if(qu){
        print()
    }
})
//최소 구매 수량 1, 최대 구매 수량 10
//10개 이상 구매하려고 하면 '최대 구매 수량입니다'
const numInput = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceP = document.querySelector('.price')
let num = 1
let price = 1000
//초기 수량 1 설정
numInput.value = num
priceP.innerHTML = price.toLocaleString('ko-kr')+'원'

//버튼 클릭 시 수량 최대 10까지 증가
plusBtn.addEventListener('click', ()=>{
    if(num < 10){
        num++
        numInput.value = num
        price = num*1000
    }
    // console.log('if밖', num)
    if(num == 10){
        alert('최대 구매 수량입니다')
    }
    priceP.innerHTML = price.toLocaleString('ko-kr')+'원'
})
minusBtn.addEventListener('click', ()=>{
    if(num > 1){
        num--
        numInput.value = num
        price = num*1000
    }
    // console.log('if밖', num)
    if(num == 1){
        alert('최소 구매 수량입니다')
    }
    priceP.innerHTML = price.toLocaleString('ko-kr')+'원'
})