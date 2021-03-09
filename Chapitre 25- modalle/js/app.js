

let exit = (e) =>
{
  
    e.preventDefault();
    e.stopPropagation()
    
    

            $('.modal-link').css("display","unset")
            /$('.m-box-visible').hide(300)
            $('.bg-hidden').removeClass('bg-hidden')
            setInterval(() => {
             // $('.m-box-visible').removeClass('m-box-visible')
              
            }, 1000);
            
            
       
    
    
    }


$(document).ready(function () 
{
  
    $(".modal-link").click(function(e)
      { 

    e.preventDefault()
    e.stopPropagation()
    let href =  $(e.target).attr('href');

    $(href).slideDown(300)
    $(href).addClass('m-box-visible')
    $('.modal-link').css("display","none")
    
     $( 'ul ').addClass('bg-hidden')
    $('body').addClass('bg-hidden')

    $('.exit').click(   e=>exit(e) )
    $('section ').click(   e=>exit(e) )
   

   $(document).keydown(function (e) { 
     if (e.key == 'Escape')
     {
      exit(e)
     }
   });
    

})
})

console.log("bye")
