//Glith
const $bg_container = document.querySelector('.bg-main');

const count = 60;

for (let i = 0; i <= 30; i++) {
  const $glitchBox = document.createElement('div');
  $glitchBox.className = 'box';
  $bg_container.appendChild($glitchBox);
}

const $glitchBoxs = document.querySelectorAll('.box');

setInterval(() => {
  $glitchBoxs.forEach(($el, idx) => {
    console.log($el);
    $el.style.top = Math.floor(Math.random() * 50) + 'vw';
    $el.style.left = Math.floor(Math.random() * 350) + 'vh';
    $el.style.width = Math.floor(Math.random() * 800) + 'px';
    $el.style.height = Math.floor(Math.random() * 20) + 'px';
    $el.style.backgroundPosition = Math.floor(Math.random() * 150) + 'px';
  });
}, 300);

//Menu
$(document).ready(function(){
        var altura = $('.menu').offset().top;

        $(window).on('scroll', function(){
                if($(window).scrollTop() > altura){
                        $('.menu').addClass('menu-fixed');
                } else{
                        $('.menu').removeClass('menu-fixed');
                }
        });
});
      
//Video
$(".close-btn").click(function(){
    $('.modal').css('display', 'none');
    $('#reel').pause();
});

//CURSOR
const cursor = document.getElementById("cursor");
const enlaces = document.querySelectorAll("a");

const onMouseMove = (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
};

const onMouseOver = () => {
  cursor.classList.add("hover");
};

const onMouseOut = () => {
  cursor.classList.remove("hover");
};

const onMouseDown = () => {
  cursor.classList.remove("mouseup");
  cursor.classList.add("mousedown");
};

const onMouseUp = () => {
  cursor.classList.remove("mousedown");
  cursor.classList.add("mouseup");
};

const onMouseEnter = () => {
  cursor.classList.remove("hide");
};

const onMouseLeave = () => {
  cursor.classList.add("hide");
};

// set custom cursor position
document.addEventListener("mousemove", onMouseMove);

// hide cursor when outside the document
document.addEventListener("mouseenter", onMouseEnter);
document.addEventListener("mouseleave", onMouseLeave);

// manage cursor hover and click effects
enlaces.forEach((el) => {
  el.addEventListener("mouseover", onMouseOver);
  el.addEventListener("mouseout", onMouseOut);
  el.addEventListener("mousedown", onMouseDown);
  el.addEventListener("mouseup", onMouseUp);
});


AOS.init({
        duration: 1200,
      })
