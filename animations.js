
//animation du titre et du logo
gsap.from('.titre',{
    duration:2,
    x:1000,
    opacity:0,
})

gsap.from('.logo',{
    duration:2,
    x:-1000,
    opacity:0,
})

gsap.from('.projet',{
    duration:1.5,
    x:-1000,
    opacity:0,
    scrollTrigger:{
        trigger : ".deux",
        toggleActions : 'restart none none none'
    }
})

gsap.from('.sujet',{
    duration:1.5,
    x:-1000,
    opacity:0,  
    delay:1.5,
    scrollTrigger:{
        trigger : ".deux",
        toggleActions : 'restart none none none'
    }
})

gsap.from('.projetContent, .sujetContent',{
    duration:6,
    opacity:0,
    scrollTrigger:{
        trigger : ".deux",
        toggleActions : 'restart none none none'
    }
})