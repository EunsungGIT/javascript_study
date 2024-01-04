// 왼쪽 썸네일 이미지 JS
//1. small_thumnail-a 마우스를 올리면(ex) small1 마우스를 올렸다면
//2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경
const item_detail = document.querySelector('.item_detail')
const small_thumnail = document.querySelectorAll('.small_thumnail a')
const big_thumnail = document.querySelector('.big_thumnail img')
console.log(item_detail, small_thumnail, big_thumnail)

small_thumnail[0].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[1].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})
small_thumnail[2].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[3].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})
small_thumnail[4].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[5].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})
