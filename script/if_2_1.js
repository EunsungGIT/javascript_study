//조건문 if(조건식){조건식 참 실행결과}else{조건식 거짓 실행결과}
// const qa = prompt('이동 방향을 입력하세요','왼쪽, 오른쪽, 가운데 중 하나로 입력')
//논리 연산자(&&(and), ||(or), ~(not)) 활용 조건식 단축하기
//비교 && 비교 = 둘다 참이어야 참 결과
//비교 || 비교 = 둘 중 하나만 참이어도 참 결과
/* if(qa=='왼쪽'||qa=='가운데'||qa=='오른쪽'){
    alert(`${qa} 1칸 이동`)
} */

//if ~ else if ~ else 다양한 조건식으로 구분하기
/* if(qa == '왼쪽'){
    alert('왼쪽 1칸 이동')
}else if(qa == '오른쪽'){
    alert('오른쪽 1칸 이동')
}else if(qa == '가운데'){
    alert('가운데 1칸 이동')
} */

//케찹, 머스타드, 설탕 소스 중 하나 선택
/* const sause = prompt('3가지 소스 중 하나를 선택하세요', '케찹, 머스타드, 설탕 중 1택')
if(sause == '케찹'){
    alert('케찹을 선택하였습니다')
}else if(sause == '머스타드'){
    alert('머스타드를 선택하였습니다')
}else if(sause == '설탕'){
    alert('설탕을 선택하였습니다')
}else {
    alert('소스 선택 안하셨습니다')
} */

//100 ~ 90 A
//89 ~ 80 B
//79 ~ 70 C
//69 ~ 60 D
//59 이하면 F
/* const score = prompt('시험점수를 입력하세요,','0~100점 사이값')
let score_result = '' */
//if 조건 안에 if를 추가 작성하는 경우 -> 중첩 if문(조건에서 추가 조건이 더 필요한 경우 0~100 참 조건으로 만든 후 그 사이  50 점수를 알고 싶을 때)
/* if(score >= 0 && score < 101){ //0~100 조건
    if(score >=90){
        score_result = 'A'
    }else if(score >=80){
        score_result = 'B'
    }else if(score >=70){
        score_result = 'C'
    }else if(score >=60){
        score_result = 'D'
    }else{
        score_result = 'F'
    }
    alert(`당신의 점수는 ${score_result}학점입니다.`)
}else{
    alert('잘못 입력하셨습니다')
} */

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애,자존심,외로움'
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손,양보'
    },{
        month:3,
        flower:'수선화',
        content:'자기애,자존심,외로움'
    },{
        month:4,
        flower:'스위트피',
        content:'추억,즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망,섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움,인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀,상상,견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망,비애'
    },{
        month:11,
        flower:'국화',
        content:'성실,진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하,감사'
    }
]
console.log(birthday_flower[2])
//Q. 당신의 생일은 몇월인가요?
//ex) 12월이라고 작성했다면?
//12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다.
//birthday_flower 객체, 배열명
const user_birth = Number(prompt('당신의 생일은 몇월인가요?'))
let birthday_message = '' //최종 결과 값 변수
let user_birthday_month = '' //중첩 if문에서 사용자ㅏ 입력한 달과 탄생화 배열객체를 연결해주는 전역변수
if(user_birth > 0 && user_birth < 13){//1~12 조건
    //위 조건이 참일 때 추가 세부조건을 만들어주는 중첩if문 위치
    /* if(user_birth == 1){
        user_birthday_month = birthday_flower[user_birth-1]
    }else if(user_birth == 2){
        user_birthday_month = birthday_flower[user_birth-1]
    } */
    if(user_birth == 1||2||3||4||5||6||7||8||9||10||11||12){
        user_birthday_month = birthday_flower[user_birth-1]
    }
    birthday_message = `
    ${user_birthday_month.month}월의 탄생화는 
    ${user_birthday_month.flower}이고 꽃말은 
    ${user_birthday_month.content}입니다.`
    alert(birthday_message)
}else{
    alert('잘못 입력하셨습니다.')
}