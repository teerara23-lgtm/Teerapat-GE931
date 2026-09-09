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


// Image lightbox: click any portfolio image to view it large
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function closeLightbox(){
  if(!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
}

document.querySelectorAll('.zoomable-image').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || 'ภาพขนาดใหญ่';
    const caption = img.closest('figure')?.querySelector('figcaption')?.textContent?.trim() || '';
    lightboxCaption.textContent = caption;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxBackdrop?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && lightbox?.classList.contains('is-open')) closeLightbox();
});
