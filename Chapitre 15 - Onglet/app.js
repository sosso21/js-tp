

var setOnglet = function(selected )
{
    selectedparent = selected.parentElement 

    if (selectedparent.classList.contains('actif') ) {
        return false
    }

    // on retire le .actif sur l'acien pour le remetre )  la selectedparent
document.querySelector('.navbar .actif').classList.remove('actif')
    selectedparent.classList.add('actif')

    //on retire le .afficher et on le met au bon
    document.querySelector('.content .afficher').classList.remove('afficher')
    document.querySelector(selected.getAttribute('href')).classList.add('afficher')

} 

// Gestion les Hash
var hash = window.location.hash
var link_hash = document.querySelector('.navbar a[href="'+hash+'" ]') 
 if ( hash  && !link_hash.classList.contains('actif')  ) {
     setOnglet(link_hash)
 }


//Ecoute du click
var links = document.querySelectorAll('.navbar a')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function(){
        console.log(links[i].getAttribute('href'))
        setOnglet(links[i])
    }
     )
    
}

/*
app.js:114 Uncaught ReferenceError: li is not defined
    at HTMLAnchorElement.<anonymous> (app.js:114)
(anonymous) @ app.js:114
*/