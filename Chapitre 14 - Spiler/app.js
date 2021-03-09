/*
var spoile = document.querySelector('.spoil-content')
var btn = document.querySelector('#spoileME')

btn.addEventListener('click', function(e){
    e.stopPropagation()
   // spoile.classList.toggle('spoil-visible')
   btn.nextElementSibling.classList.add('spoil-visible')
   btn.parentNode.removeChild(btn)
} )
//-----------*/

var spoils = document.querySelectorAll('span.spoil-content')

var op = function (spoil) {
    conteiner = document.createElement('div')
    conteiner.innerHTML = ' <button id="spoileME" type="button" class="btn btn-outline-primary"> spoile </button><p class="spoil-content"> '+spoil.textContent +'</p>'
    spoil.parentElement.insertBefore(conteiner , spoil )
    spoil.parentNode.removeChild(spoil)

    // on ecoute le clic
    var button =  conteiner.firstElementChild
   
    
    button.addEventListener('click', function(e)
    {
        e.stopPropagation()
        button.nextElementSibling.classList.add('spoil-visible')
        button.parentNode.removeChild(button)
        
        console.log(conteiner.lastElementChild)
    } ) 

    }


    

for (let i = 0; i < spoils.length; i++) {
   op(spoils[i])
} 






