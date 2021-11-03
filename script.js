let containerslide=document.querySelector('.container_slide ');
let imgprofileonline=document.querySelector('.img_profil_online');

let pressed=false;
let startx;
let x;

containerslide.addEventListener("mousedown", (e) =>{
    pressed=true;
    startx=e.pffsetx - innerSlider.offsetLeft;
    slider.style.cursor='grabbing' 
});

containerslide.addEventListener("mouseenter", () =>{
     slider.style.cursor='grab' 
});

containerslide.addEventListener("mouseup", () =>{
    slider.style.cursor='grab' 
});

containerslide.addEventListener("mouseup", () =>{
    pressed=false;
});

containerslide.addEventListener("mousemove", (e) =>{
    if(!pressed) return;
    e.preventDefault();

    x= e.offsetx

    innerSlider.style.left= `${x - startx}px `; 
});