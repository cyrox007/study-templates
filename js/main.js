main = {};
main.data = {
  mobileBTN: document.getElementById('mobile-btn'),
  mNav: document.getElementById('m-nav'),
  closeBTN: document.getElementById('close'),
};

(function () {
  main.data.closeBTN.addEventListener('click', ()=>{
    let nav = main.data.mNav;
    
    nav.classList.toggle('active');
    nav.querySelector('.m-nav__content').classList.toggle('active');
  });
  main.data.mobileBTN.addEventListener('click', ()=>{
    let nav = main.data.mNav;
    
    nav.classList.toggle('active');
    nav.querySelector('.m-nav__content').classList.toggle('active');

    let links = nav.querySelector('.navigate').querySelectorAll('a');

    links.forEach(el=>{
      el.addEventListener('click', ()=>{
        nav.classList.toggle('active');
        nav.querySelector('.m-nav__content').classList.toggle('active');
      });
    });
  });
}());