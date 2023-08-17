// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader-container').style.display ="none";
    document.body.style.overflowY = "visible" 
})

// Clouds Animations
let cloud1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.cloud4',
        start: '50% center',
        end: '300% 60%',
        scrub: true,
        // markers: true
    }
})

cloud1.to('.cloud4', {
    x: 1000
})

let cloud2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.cloud2',
        start: '-70% center',
        end: '160% center',
        scrub: true,
        // markers: true
    }
})

cloud2.to('.cloud2', {
    x: 600
})
let cloud3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.cloud3',
        start: '-110% center',
        end: '210% center',
        scrub: true,
        // markers: true
    }
})

cloud3.to('.cloud3', {
    x: 700
})

let cloud4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.cloud1',
        start: '-70% center',
        end: '180% center',
        scrub: true,
        // markers: true
    }
})

cloud4.to('.cloud1', {
    x: 400
})

// Spring Background
const { innerHeight } = window;

gsap.from('.NewSpring', {
    scale: 1.9, duration: 3,
    scrollTrigger: {
        trigger: '.NewSpring',
        // start: 'top center',
        // end: '80% center',
        start: '40% center',
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

let background = gsap.timeline({
    scrollTrigger: {
        trigger: '.NewSpring',
        start: 'top center',
        end: '80% center',
        scrub: true,
    }
})

background.to('.NewSpring', {
    y: 600
})

let appear1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.firstPhrase',
        start: '-250% 30%',
        end: '50% center',
        scrub: true,
        // markers: true
    }
})

appear1.to('.firstPhrase', {
    opacity: 1,
})

let appear2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.secondPhrase',
        start: '-250% 30%',
        end: '50% center',
        scrub: true,
    }
})

appear2.to('.secondPhrase', {
    opacity: 1,
})

let appear3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.thirdPhrase',
        start: '-250% 30%',
        end: '50% center',
        scrub: true,
        // markers: true
    }
})

appear3.to('.thirdPhrase', {
    opacity: 1,
})

// Home Page Elements
const nav = document.getElementsByClassName('nav_options')

for (let i = 0; i < nav.length; i++) {
    nav[i].style.color = "Yellow"
}

let navigation = gsap.timeline({
    scrollTrigger: {
        trigger: '.navigation',
        start: '390% center',
        end: '500% center',
        scrub: true
    }
})

navigation.to('.navigation', {
    opacity: 1,
})

gsap.from('.firstName', {
    scale: 0.01, stager: 0.25, duration: 3,
    scrollTrigger: {
        trigger: '.firstName',
        start: '-30000% 60%',
        end: '90% 60%',
        // start: '40% center',
        // end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

gsap.from('.lastName', {
    scale: 0.01, stager: 0.25, duration: 3,
    scrollTrigger: {
        trigger: '.firstName',
        start: '-top 60%',
        end: '90% 60%',
        // start: '40% center',
        // end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

let slogan = gsap.timeline({
    scrollTrigger: {
        trigger: '.slogan',
        start: '-10% 60%',
        end: '170% 60%',
        scrub: true
    }
})

slogan.to('.slogan', {
    opacity: 1,
    x: 80
})

// Lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// Scroll to top button
let toTopBtn = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4620 || document.documentElement.scrollTop > 4620) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function ScrollToTop() {
  document.body.scrollTop = 3820;
  document.documentElement.scrollTop = 3820;
}