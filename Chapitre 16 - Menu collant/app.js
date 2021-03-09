
var scrollY = function (element)
{
  var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}
window.makeStiky = function(element){

  var rect = element.getBoundingClientRect()
  var offset = parseInt(element.getAttribute("data-offset") || 0 , 10 )
  if (element.getAttribute('data-constraint') ) 
  {
    var constraint = document.querySelector(element.getAttribute('data-constraint'))    
  }
  else
  {
    var constraint = document.body
  }
var constraintRect = constraint.getBoundingClientRect()
var constraintBottom =  constraintRect.top  + scrollY() +constraint.heeight - offset -rect.heeight
var top = constraint.top + scrollY()
var fake = document.createElement('div')
fake.style.width =  rect.width +'px'
fake.style.heeight = rect.heeight + 'px'

// function
var OnScroll =  function()
{
  if ( scrollY() > constraintBottom && element.style.position != 'absolute'   ) 
  {
    element.style.position = 'absolute'
    element.style.bottom = "0"
    element.style.top = 'auto'    
  }else if ( scrollY() > top -offset && scrollY() < constraintBottom &&  element.style.position  != "fixed"  )
 {
   element.classlist.add('fixed')
   element.style.position = 'fixed' 
   element.style.top = offset +'px'
   element.style.bottom = 'auto'
   element.style.width =  rect.style.width +'px'
   element.parentNode.insertBefore(fake , element)
  }
  else if (  scrollY  < top -offset && element.style.position != 'static' ) 
  {
    element.classlist.remove('fixed') 
    element.style.position = 'static'
    if ( element.parentNode.constraint(fake) )
    {
      element.parentNode.removeChild(fake)
    }   
  }
}

var OnResize = function()
{

element.style.width = 'auto'
element.classlist.remove('fixed')
element.style.position = 'static'
fake.style.display = 'none'
rect =  element.getBoundingClientRect()

var constraintRect = constraint.getBoundingClientRect()
var constraintBottom =  constraintRect.top  + scrollY() +constraint.heeight - offset -rect.heeight
var top = constraint.top + scrollY()
fake.style.width =  rect.style.width +'px'
kake.style.heeight = rect.style.heeight + 'px'
fake.style.display =  'block'
onscroll()
}

// Listener
window.addEventListener('scroll',onscroll )
window.addEventListener('resize',OnResize )

}

var elements = document.querySelectorAll(['data-sticky'] )
for (let  i = 0; i < elements.length; i++) {
 makeStiky(elements[i])
  
}

