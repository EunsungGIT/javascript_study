const h1Tag = document.querySelector('h1');
const liTag = document.querySelector('li');
const titleCls = document.querySelector('.title');
const listCls = document.querySelector('li.list');
const main_title = document.querySelector('#main_title');
console.log(h1Tag);
console.log(liTag);
console.log(titleCls);
console.log(listCls);
console.log(main_title);
console.log('---------------------------')
const listAll = document.querySelectorAll('.list');
console.log(listAll);
console.log(listAll[1]);
console.log(listAll[2]);
console.log(listAll.length);
console.log('-----------------------------')
//명시적 형변환(개발자가 직접 데이터타입을 결정)
let a = 10
console.log(typeof a)//number
a = '10'
console.log(typeof a)//string
//암시적 형변환(자바스크립트가 개발자 동의없이 자동으로 형변환)
//prompt 받는 데이터값은 무조건 문자열로 처리된다.
let age = Number(window.prompt('당신의 나이는?')); //1살 1
console.log(typeof age)
console.log(age)
console.log(Number(age))
age += 1 //문자+숫자 = 문자 '20'+1 = '201'
console.log(age)