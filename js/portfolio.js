
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      smartBackspace: true,
      typeSpeed: 25, 
      startDelay: 2000,
      loop: true,
      loopCount: 2
  });


window.onload = function () {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const no_scroll = document.querySelector('.wrapper-all')

    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      no_scroll.classList.toggle('no-scroll');
      

    });

}

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

window.onload = function() {

const redButton = document.querySelector(".red")
const greenButton = document.querySelector(".green")
const yellowButton = document.querySelector(".yellow")
const codeWindow = document.querySelector(".code-container")
const dock = document.querySelector('.dock')

redButton.addEventListener("click", function(){
  codeWindow.classList.toggle('exit');
})

greenButton.addEventListener("click", function(){
  codeWindow.classList.toggle('maximize')
})

yellowButton.addEventListener("click", function(){
  dock.classList.toggle('minimize')
  codeWindow.classList.toggle('minimize')
})

dock.addEventListener("click", function() {
  
    codeWindow.classList.toggle('minimize')
    dock.classList.remove('minimize')
  
})

}