const li = document.querySelectorAll('.list li')
const btn= document.querySelector('#design_add')
const onoff = document.querySelector('#onoff')
console.log(li, btn, onoff)
// inline style 적용되는 js css 명령어 활용
// 우선순위가 가장 높아 다른 css 충돌없이 우선적용할 수 있으나 css 속성이 여러개라면 하나하나 개별 명령을 해야해서 작성이 불편하고 효율이 안좋다.
li[0].style.backgroundColor = 'yellow'
li[0].style.borderTop = '2px solid red'
li[0].style.color = 'red'
// 제한없이 다양한 css속성을 가지고 있는 class를 생성해서 DOM에 적용하기
/* li[1].className = 'design_set1'
li[1].className += ' design_set2' */
li[1].classList.add('design_set1', 'design_set2')
li[1].classList.remove('design_set1','design_set2')

// 버튼으로 class 제어
btn.addEventListener('click', ()=>{
    li[2].classList.toggle('design_set1')
})
onoff.addEventListener('click', ()=>{
    li[3].classList.toggle('showhide')
})
li[2].addEventListener('cilck', function(){
    this.classList.replace('design_set1', 'design_set2')
})
li[5].classList.add('design_set1')
let boolena = ''
li[5].addEventListener('click', ()=>{
    boolean = li[5].classList.contains('design_set1')
    console.log(boolean)
    if(boolean){
        alert('존재한다')
    }else{
        alert('존재하지 않는다')
    }
})