//첫번째 잡기, 마지막 자식 노드 잡기
//firstChild, firstElementChild
//lastChild, lastElementChild
const items = document.querySelectorAll('.item')
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild);
console.log(items[0].firstElementChild);
console.log(items[0].lastChild);
console.log(items[0].lastElementChild);
//----------------------------------형제노드잡기
//이전 형제 previousSibling, previousElementSibling
//다음 형제 nextSibling, nextElementSibling
const item_h2 = items[0].querySelector('h2');
console.log(item_h2) //첫번째 item의 h2 상품 이름 정상확인
console.log(item_h2.nextSibling.nextSibling)//공백포함 다음형제
console.log(item_h2.nextElementSibling)//요소만 체크하는 다음형제
console.log(item_h2.previousSibling)
console.log(item_h2.previousElementSibling)