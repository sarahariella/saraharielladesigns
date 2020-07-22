function myFunction(x) {
  if (x.matches) { // If media query matches
    function splitScroll(){
      const controller = new ScrollMagic.Controller();
  
      new ScrollMagic.Scene({
          duration: '300%', 
          triggerElement: '.title',
          triggerHook: 0,
      })
      .setPin('.title')
      .addTo(controller);
  }
  
  splitScroll();
  } else {

  }
}

var x = window.matchMedia("(min-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state change


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

