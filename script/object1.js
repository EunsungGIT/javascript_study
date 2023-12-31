// 객체 object
// 데이터 저장소 = 변수(한번에 한가지값), 배열(2개 이상의 값)
// 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이
const cat = {
    color:'black',
    age:1,
}
console.log(cat);
console.log(cat.color);
console.log(cat.age);
// console.log(cat.length); //undefined
//1살 black 고양이 분양합니다
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다`);
const cat2 = {
    color:['white', 'yellow', 'black'],
    age:2
}
console.log(cat2);
//고양이의 털 색깔은 white, yellow, black으로 이루어져 있습니다.
console.log(`고양이의 털 색깔은 ${cat2.color[1]}, ${cat2.color[0]}, ${cat2.color[2]}으로 이루어져 있습니다.`);
const cat3 = {
    'cat variety':'korean shothair',
    color:['white', 'black'],
    age:1,
    gender:'female',
    adoption:'before',
    neutering:'before',
    health:'good'
}
/*
    코리안 숏헤어
    흰색, 검은색 고양이
    1살
    입양 전
    암컷
    중성화 전
*/
console.log(cat3);
// console.log(cat3 cat variety'); error
console.log(cat3['cat variety']);
// 입양 전 -> 입양완료
cat3.adoption = 'done';
console.log(cat3);
// 중성화 전 -> 중성화 완료
// 1 -> 2
cat3.neutering = 'done';
cat3.age += 1;
console.log(cat3);