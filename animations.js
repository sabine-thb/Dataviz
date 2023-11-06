// const titrePresent = document.querySelector('.titre').textContent
// gsap.set('.titre', {text:''})
// gsap.to('.titre',{
//     text:titrePresent,
//     duration:2,
// })

//animation texte tapé juste au dessus


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