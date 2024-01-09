//함수 스코프
//지역변수와 전역변수
/* let b = 20
let c = 30
let a = ''
scope1() //함수 호출 위치는 생성위치와 관계 없다.
function scope1(){
    a = 10
    console.log(a,b,c)
}
console.log(a+b+c) //함수 호출 전 : undefined+20+30 */

//함수 스코프 연습
let x = 1
let y
let z

function func1(){
    y = 5
    console.log(x+y)
}
function func2(){
    z = 10
    func1()
    console.log(x+y+z)//error
}
func2()
console.log('----------------------')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
/* btn.addEventListener('click', function(){
    console.log('결과 테스트')
}) */

function testFunc(){
    console.log('결과 테스트')
}
btn.addEventListener('click', testFunc)
btn2.addEventListener('click', testFunc)
//이벤트 함수 개별 선언 연습
const minus = document.querySelector("#minus")
const num_count = document.querySelector('#num')
const plus = document.querySelector("#plus")
const price = document.querySelector('.price')
let num = 1
let prices = 4000
console.log(minus, num, plus)

/* function minusBtn(){
    num_count.value = --num
    price.innerHTML = (prices*num).toLocaleString('ko-kr') + '원'
    num_count.value < 1 ? alert('최소 구매 수량입니다') : 
}
function plusBtn(){
    num_count.value = ++num
    price.innerHTML = (prices*num).toLocaleString('ko-kr') + '원'
    num_count.value > 10 ? alert('최대 구매 수량입니다') : 
} */
function minusBtn(){
    num > 1 ? num-- : alert('최소 구매 수량입니다')
    num_count.value = num
    price.innerText = (prices*num).toLocaleString('ko-kr')+'원'
}
function plusBtn(){
    num < 10 ? num++ : alert('최대 구매 수량입니다')
    num_count.value = num
    price.innerText = (prices*num).toLocaleString('ko-kr')+'원'
}
minus.addEventListener('click', minusBtn)
plus.addEventListener('click', plusBtn)