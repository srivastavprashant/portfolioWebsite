const body=document.body;

let lastscroll=0
window.addEventListener('scroll',()=>{
    let currentScroll=window.pageYOffset;
   
    if(currentScroll<=lastscroll){
        
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if(currentScroll>lastscroll){
       
        body.classList.add("scroll-up")
        body.classList.remove("scroll-down")
        
    }
    lastscroll=currentScroll;
} )
