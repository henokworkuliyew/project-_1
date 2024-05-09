var icon=document.getElementById("theme");
    icon.onclick=function(){
      document.body.classList.toggle("active");
    }

    var toggler=document.querySelector(".nav-toggle");
     // var icon=document.querySelector(".fa-bars");
    var menu=document.querySelector('.nav-lists');
    toggler.addEventListener('click',()=>{
       toggler.classList.toggle('active2');
        menu.classList.toggle('active2');
    })
    
 