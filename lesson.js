let slider=document.getElementById("lessonheroimg");
    slider.addEventListener("mouseenter",function(){
        slider.innerHTML=`<img src="slider2.jpg" height="450px" width="100%">`
    })
    slider.addEventListener("mouseleave",function(){
        slider.innerHTML=`<img src="1.jpg" height="450px" width="100%">`
    })
