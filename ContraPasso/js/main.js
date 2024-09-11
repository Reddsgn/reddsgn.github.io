// eventos
$(document).ready(function() {
  $('#lightSlider').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    verticalHeight:'100vh',
    vThumbWidth:250,
    thumbItem:3,
    thumbMargin:0,
    slideMargin:0,
    controls: false,
    speed: 800
  });  
});

//Modal Contacto
$('#contacttxt').click(function(){
  $('#contacto-open').addClass('show');
  $("html, body").css("overflow","hidden");
});
$('.close-contact').click(function(){
  $('#contacto-open').removeClass('show');
  $("html, body").css("overflow","scroll");
});
$('#contacto-footer').click(function(){
  $('#contacto-open').addClass('show');
  $("html, body").css("overflow","hidden");
});


//Menú close 
$('.menu-link').click(function(){
  $('.input-toggler').prop('checked', false);
});

//Eventos slider
var mouse = {
  X   : 0,
  Y   : 0,
  CX  : 0,
  CY  : 0
},
block = {
  X   : mouse.X,
  Y   : mouse.Y,
  CX  : mouse.CX,
  CY  : mouse.CY
},
imags = [
  "'./img/Estrellas_del_rock_entrevista.jpg'",
  "'./img/Union_ska_poster_event.png'",
  "'./img/Batalla_de_bandas_poster_event.png'",
  "'./img/Curados_d_espanto_poster_event.png'",
];

$('.block').on('mousemove', function(e) {
mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
})

$('.block').on('mouseleave', function(e) {
mouse.X   = mouse.CX;
mouse.Y   = mouse.CY;
})

setInterval(function(){

block.CY   += (mouse.Y - block.CY) / 12;
block.CX   += (mouse.X - block.CX) / 12;

$('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
$('.block').css({
transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
})

}, 20);

$('.slider .item').each(function(i){

if(i == 0){

$(this).addClass('active');
$(this).next().addClass('next');
$(this).prev().addClass('prev');
}

$(this).attr('id', 'slide-'+i);

$(this).prepend(
$('<div>', {class: 'blur', style: 'background: url(' + imags[i] + ');'}),
$('<div>', {class: 'bg', style: 'background: url(' + imags[i] + ');'})
)

$(this).find('.block').css('background', 'url(' + imags[i] + ')')

$('.navigations .dots').append(
$('<li>', {class: i == 0 ? 'active' : '', id: i}).on('click', function(){
var cSlide = $('.slider #slide-'+$(this).attr('id'));
  
  $('.navigations .dots li').removeClass('active');
  $(this).addClass('active');
  
  $('.slider .item').removeClass('active prev next');
  cSlide.addClass('active');
  cSlide.next().addClass('next');
  cSlide.prev().addClass('prev');
})
)
})





//Galeria de fotos
const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

const galleryGrid = document.querySelector(".gallery-grid");
const links = galleryGrid.querySelectorAll("a");
const imgs = galleryGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = lightboxModal.querySelector(".lightbox-content");

function createCaption (caption) {
  return `<div class="carousel-caption d-none d-md-block">
      <h4 class="m-0">${caption}</h4>
    </div>`;
}

function createIndicators (img) {
  let markup = "", i, len;

  const countSlides = links.length;
  const parentCol = img.closest('.col');
  const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

  for (i = 0, len = countSlides; i < len; i++) {
    markup += `
      <button type="button" data-bs-target="#lightboxCarousel"
        data-bs-slide-to="${i}"
        ${i === curIndex ? 'class="active" aria-current="true"' : ''}
        aria-label="Slide ${i + 1}">
      </button>`;
  }

  return markup;
}

function createSlides (img) {
  let markup = "";
  const currentImgSrc = img.closest('.gallery-item').getAttribute("href");

  for (const img of imgs) {
    const imgSrc = img.closest('.gallery-item').getAttribute("href");
    const imgAlt = img.getAttribute("alt");

    markup += `
      <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
        <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
        ${imgAlt ? createCaption(imgAlt) : ""}
      </div>`;
  }

  return markup;
}

function createCarousel (img) {
  const markup = `
    <!-- Lightbox Carousel -->
    <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        ${createIndicators(img)}
      </div>
      <!-- Wrapper for Slides -->
      <div class="carousel-inner justify-content-center mx-auto">
        ${createSlides(img)}
      </div>
      <!-- Controls/icons -->
      <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
        <i class="bi bi-arrow-left-square-fill gallery-control-icons"></i>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
        <i class="bi bi-arrow-right-square-fill gallery-control-icons"></i>
      </button>
    </div>
    `;

  modalBody.innerHTML = markup;
}

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const currentImg = link.querySelector("img");
    const lightboxCarousel = document.getElementById("lightboxCarousel");

    if (lightboxCarousel) {
      const parentCol = link.closest('.col');
      const index = [...parentCol.parentElement.children].indexOf(parentCol);

      const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
      bsCarousel.to(index);
    } else {
      createCarousel(currentImg);
    }

    bsModal.show();
  });
}











