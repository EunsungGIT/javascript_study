//아이디 찾기 - 인증번호 받기
/* Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다" 출력하기 */
const id_search = document.querySelector('#id_search')
const authentication_btn = document.querySelector('#authentication_btn')
const authentication_send = document.createElement('span')
console.log(authentication_btn, authentication_send)
authentication_btn.addEventListener('click', function(){
    id_search.appendChild(authentication_send);
    authentication_send.innerText = '인증번호가 발송되었습니다';
})
//객체.appendChild(Node) 마지막 자식 노드 추가
//객체.insertBefore(삽입Node, 기존 시작 노드) 첫번째 자식 노드 추가
//form.insertBefore(삽입, 부모.firstChild)
/* Q. 인증번호 입력칸 #authentication_input 값을 입력하면 form의 이전 형제 위치에 "인증번호가 틀렸습니다" */
const search = document.querySelector('#id_search')
const authentication_input = document.querySelector('#authentication_input')
const authentication_error = document.createElement('p')
console.log(authentication_input, authentication_error)
authentication_input.addEventListener('blur', function(){
    search.appendChild(authentication_error)
    authentication_error.innerText = '인증번호가 틀렸습니다';
})