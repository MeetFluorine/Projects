var crsr=document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){

    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrblr.style.left = dets.x-250+"px";
    crsrblr.style.top = dets.y-250+"px";
    
})
document.addEventListener("mousemove",function(dets){

   
    
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -5%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -80%",
        scrub:2

    }
})