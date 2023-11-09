// const titrePresent = document.querySelector('.titre').textContent
// gsap.set('.titre', {text:''})
// gsap.to('.titre',{
//     text:titrePresent,
//     duration:2,
// })

// animation texte tapé juste au dessus


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


const maTimeline= gsap.timeline()
maTimeline.from('.projet',{
    duration:1,
    x:-1000,
    opacity:0,
    scrollTrigger:{
                trigger : ".projet",
                toggleActions : 'restart none none none'
    }
})

maTimeline.from('.projetContent',{
    duration:1,
    x:-1000,
    opacity:0,
    
})

maTimeline.from('.sujet',{
    duration:1,
    x:-1000,
    opacity:0,
})

maTimeline.from('.sujetContent',{
    duration:1,
    x:-1000,
    opacity:0,
})