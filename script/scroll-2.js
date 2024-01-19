const btn = document.querySelector('#btn')
const top_btn = document.querySelector('#top')
const bg = document.querySelectorAll('.bg')
const header = document.querySelector('header')

top_btn.style.display = 'none'
header.style.transition = 'top 0.3s'

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        header.style.top = '-50px'
    }else{
        header.style.top = '0'
    }

    // console.log('.')
    // console.log(window.pageYOffset)
    btn.innerHTML = window.scrollY
    if(window.scrollY > 200){
        top_btn.style.display = 'block'
    }else{
        top_btn.style.display = 'none'
    }
})
top_btn.addEventListener('click', ()=>{
    window.scrollTo({top:bg[0].offsetTop})
})
/* top.addEventListener('click', ()=>{

}) */