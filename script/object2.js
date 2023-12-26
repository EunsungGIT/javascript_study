// 예약 시스템
const reservation = {
    room:1,
    adult:2,
    children:1,
    option:'금연'
}
console.log(reservation);
//방1개 -> 2개 예약
reservation.room +=  1;
console.log(reservation);
delete reservation.option; //객체 속성 제거
console.log(reservation);
reservation.option = '금연';
console.log(reservation); //객체 속성 추가(변경동일)
//---------------------------------
//변수로 도형의 x, y, z 값 담기
//객체로 도형의 x, y, z 값 담기
//x 50, y 100, z 0
let shapeX = 50
let shapeY = 100
let shapeZ = 0
console.log(shapeX, shapeY, shapeZ);

const shape = {
    x:50,
    y:100,
    z:0
}
console.log(shape);
//------------------------------
const user = {
    name:'박',
    age:20,
    birthday:function(){
        console.log('생일 ㅊㅋ')
    }
}
console.log(user.birthday());