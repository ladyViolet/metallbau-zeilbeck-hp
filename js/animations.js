
//HOME
//ONLOAD
//-------------------
//LOGO
var tlOnLoad = new gsap.timeline({paused:true});
tlOnLoad.from('#title', {
    opacity: 0,
    scale: 0.1,
    duration: 1,
    ease: Power4.easeOut
}).from('#subtitle', {
    opacity: 0,
    y: -100,
    duration: .5,
    ease: Power4.easeOut
}, "-=.5").from('.teaser-text', {
    opacity: 0,
    duration: .5,
    ease: Power4.easeOut
}).from('.social-block', {
    opacity: 0,
    y: 100,
    duration: .5,
    ease: Power4.easeOut
}).from('.social-symbols', {
    scale: 0.1,
    duration: .5,
    ease: Power4.easeOut
}, "-=.3").from('.iso-cert', {
    opacity: 0,
    scale: 0.1,
    duration: 1,
    ease: Bounce.easeOut
});

//ON HOVER
//-------------------
const shrinkElements = document.querySelectorAll(".hoverShrink");

  function playHoverShrink(num) {
    //console.log(num);
    gsap.to("#shrinkElem-" + num, {
        paused: true,
        scale: 0.9,
      }).play();
  };

  function reverseHoverShrink(num) {
    //console.log(num);
    gsap.to("#shrinkElem-" + num, {
        paused: true,
        scale: 1,
      }).play();
  };

  var mapIcon = document.querySelector("#mapIcon");
  var mapIconSmall = document.querySelector("#mapIcon-small");
  var contact = document.querySelector("#nav-contact");

  var bounce = gsap.to(mapIcon, {
    paused: true,
    duration: .1,
    y: 80,
    ease: "circ.in"
  });

  var bounceSmall = gsap.to(mapIconSmall, {
    paused: true,
    duration: .1,
    y: 60,
    ease: "circ.in"
  });

  function delayedLoad(elem) {
    gsap.from(elem,{
        duration: 2,
        opacity: 0,
        delay: .5
    }).play();
  }

//INIT
window.onload = function()
{
    for (let x = 0; x < shrinkElements.length; x++) {
        //console.log(x);
        shrinkElements[x].addEventListener("mouseenter", () => playHoverShrink(x));
        shrinkElements[x].addEventListener("mouseleave", () => reverseHoverShrink(x));
    }
    delayedLoad(mapIcon);
    contact.addEventListener("click", () => delayedLoad(mapIcon));
    mapIcon.addEventListener("mouseenter", () => bounce.play());
    mapIcon.addEventListener("mouseleave", () => bounce.reverse());
    contact.addEventListener("click", () => delayedLoad(mapIconSmall));
    mapIconSmall.addEventListener("mouseenter", () => bounceSmall.play());
    mapIconSmall.addEventListener("mouseleave", () => bounceSmall.reverse());
    tlOnLoad.play();
}