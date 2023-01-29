/*
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
 <div class="image-slider swiper-container">
						<div class="image-slider__wrapper swiper-wrapper">
						 <div class="image-slider__slide swiper-slide">
							<div class="image-slider__image">
						<img class="sktprk1" src="img/location001.jpg" alt=" ">
						 </div>
					  </div>
					  <div class="image-slider__slide swiper-slide">
					  	<div class="image-slider__image">
							<img class="sktprk2" src="img/location002.jpg" alt=" ">
						</div>
					  </div>

					  <div class="image-slider__slide swiper-slide">
						<div class="image-slider__image">
							<img class="sktprk3" src="img/location003.jpg" alt=" ">
						</div>
					</div>
					<div class="image-slider__slide swiper-slide">
						<div class="image-slider__image">
					   <img class="sktprk4" src="img/location004.jpg" alt=" ">
						</div>
					</div>
					<div class="image-slider__slide swiper-slide">
						<div class="image-slider__image">
					   <img class="sktprk5" src="img/location005.jpg" alt=" ">
						</div>
					</div>
					<div class="image-slider__slide swiper-slide">
						<div class="image-slider__image">
							<img class="sktprk6" src="img/location006.jpg" alt=" ">
						</div>
					</div>

					<div class="image-slider__slide swiper-slide">
						<div class="image-slider__image">
						 <img class="sktprk7" src="img/location007.jpg" alt=" ">
						</div>
					</div>
						
					  

					 
					   
					   
					 
						 
					  </div>
					</div>
					</div>
					




           .image-slider{
  display: flex;

  
 }
 .image-slider__wrapper{
  display: flex;
 }
 .image-slider__slide{
  
  

 }
 .mage-slider__image{

 }


  .image-slider .swiper-slide {
    width: auto;
  }

 
  
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'


  new Swiper('.image-slider' ,{
    
    slidesPerView: 5,

    spaceBetween: 1,
    freeMode: true,
    loop: true,
  autoplay: {
  delay: ,
    disableOnInteraction: false,
  },
  speed: 5000,
 
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.start();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.stop();
        });
      }
    },
 }); 

 

/*
  

   let sliderBlock = document.querySelector('.image-slider');

  sliderBlock.addEventListener("mouseenter",function (e) {
     myImageSlider.params.autoplay.disableOnInteraction = false;
     myImageSlider.params.autoplay.delay = 500;
     myImageSlider.autoplay.start();
  });
  sliderBlock.addEventListener("mouseleave", function (e) {
    myImageSlider.autoplay.stop();
  });
  
  */ 
 
  
  