let carres = document.querySelectorAll(".carre")
//console.log(carre)

let titre = document.querySelector('h1')


titre.addEventListener("mouseover" ,function(){
titre.classList.toggle('activeFont')
})

carres.forEach(carre => {
    carre.addEventListener("click", function(){
        //console.log("click !")
        carre.classList.toggle('active')//toggle fonctionne comme un interrupteur, add fait une fois
    })
})