const target = document.querySelector('.target')
const ul = document.createElement('ul')//태그 생성\
let li = document.createElement('li')
console.log(target, ul, li)

for(let i=0; i<3; i++){
    li = document.createElement('li')
    ul.appendChild(li)
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품${j+1}</span>`
    }
    console.log(li)
}
target.appendChild(ul)
//target-ul-<li>-<span>상품</span>-li
const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')
console.log(target2,dt,dd)

/* dt.innerHTML = '제목입니다~'
target2.appendChild(dt)
for(let j=0; j<2; j++){
    dd = document.createElement('dd')
    dd.innerHTML += '내용입니다~'
    target2.appendChild(dd)
} */

for(let i=0; i<2; i++){
    dt = document.createElement('dt')
    dt.innerHTML = '제목이요~'
    target2.appendChild(dt)
    for(let j=0; j<2; j++){
        dd = document.createElement('dd')
        dd.innerHTML = '내용이요~'
        target2.appendChild(dd)
    }
}