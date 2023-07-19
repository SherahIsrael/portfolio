const nav = document.getElementsByClassName('nav_options')
console.log(nav)

for (let i = 0; i < nav.length; i++) {
    nav[i].style.color = "Yellow"
}

// Clouds Animations
let cloud = gsap.timeline({
    scrollTrigger: {
        trigger: '.cloud4',
        start: '50% center',
        end: '150% center',
        scrub: true,
        // markers: true
    }
})

cloud.to('.cloud4', {
    x: 1500
})

// Spring Background
const { innerHeight } = window;

gsap.from('.NewSpring', {
    scale: 2, duration: 3,
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

// Home Page Elements
let navigation = gsap.timeline({
    scrollTrigger: {
        trigger: '.navigation',
        start: '400% center',
        end: '730% center',
        scrub: true,
    }
})

navigation.to('.navigation', {
    opacity: 1,
})

gsap.from('.firstName', {
    scale: 0.01, stager: 0.25, duration: 3,
    scrollTrigger: {
        trigger: '.firstName',
        start: 'top center',
        end: '90% center',
        // start: '40% center',
        // end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

gsap.from('.lastName', {
    scale: 0.01, stager: 0.25, duration: 3,
    scrollTrigger: {
        trigger: '.firstName',
        start: 'top center',
        end: '90% center',
        // start: '40% center',
        // end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
})

let slogan = gsap.timeline({
    scrollTrigger: {
        trigger: '.slogan',
        start: '-10% 80%',
        end: '80% 20%',
        scrub: true,
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