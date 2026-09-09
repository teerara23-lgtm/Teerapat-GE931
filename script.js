const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';observer.unobserve(entry.target)}
  });
},{threshold:.08});
cards.forEach(card=>{card.style.opacity='0';card.style.transform='translateY(18px)';card.style.transition='opacity .55s ease, transform .55s ease';observer.observe(card)});

// Slight parallax for the AI visual; disabled on small screens.
const visual=document.querySelector('.main-card');
if(visual && window.matchMedia('(min-width:901px)').matches){
  window.addEventListener('mousemove',(e)=>{
    const x=(e.clientX/window.innerWidth-.5)*8;
    const y=(e.clientY/window.innerHeight-.5)*8;
    visual.style.transform=`perspective(900px) rotateY(${x*.35}deg) rotateX(${-y*.35}deg)`;
  });
  window.addEventListener('mouseleave',()=>visual.style.transform='');
}
