const header = document.querySelector('header');
const headerChild = header.childNodes;
console.log(header, headerChild);
console.log(header.childElementCount);

console.log(headerChild[1])
console.log(headerChild[3])
console.log(headerChild[1].innerText)
console.log(headerChild[1].innerHTML)
console.log(headerChild[3].innerText)
console.log(headerChild[3].innerHTML)

// headerChild[1].innerText = "로고";
console.log(headerChild[1].childNodes[0]);
headerChild[1].childNodes[0].innerText = '로고';

//Q. menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
//Q. menu2 마우스를 올리면 menu1 -> 메뉴2 글자 변경
const menu1 = headerChild[3].childNodes[1];
const menu2 = headerChild[3].childNodes[3];
console.log(menu1, menu2);
menu1.addEventListener('mouseover', function(){
    menu1.innerText = '메뉴1';
})
menu2.addEventListener('mouseover', function(){
    menu2.innerText = '메뉴2';
})

//main-장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기
const main = document.querySelector('main')
const cart = main.querySelector('.cart');
const all = main.querySelector('span.all');
const count = cart.childElementCount;
console.log(cart, all, count);
all.innerText = count;