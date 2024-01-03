// "안녕" chat_txt에 입력 후 send_btn을 클릭하면
// chat_list에 <li> 태그로 chat_txt에 입력한 "안녕" 값을 출력하기
const chat_list = document.querySelector('.chat_list')
const chat_txt = document.querySelector('#chat_txt')
const send_btn = document.querySelector('#send_btn');
const chating = document.createElement('ul');
console.log(chating);
console.log(chat_list, send_btn);

send_btn.addEventListener('click', function(){
    chating.innerHTML += `<li>${chat_txt.value}</li>`;
    chat_list.appendChild(chating)
    // chat_txt.value = '';
});