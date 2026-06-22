
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('is-open'));}
document.querySelectorAll('.year').forEach(el=>{el.textContent=new Date().getFullYear();});
