$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    loop:true,
    responsive:{
      0:{
        items: 1,
        margin: 70 ,
        stagePadding: 90,
      },
      357:{
        items: 1,
        margin: 32,
        stagePadding: 90,
      },
      557:{
          items: 1,
          margin: 48,
          stagePadding: 90,
      },
      800:{
          items: 2,
          margin: 48,
      },
      1440:{
        items: 3,
        margin: 48,
      }
  }
  });
});

const videoImg = document.querySelector('.img-video')
const videoVideo = document.querySelector('.video_object')
const videoBtn = document.querySelector('.img-video_btn')
const videoWrapper = document.querySelector('.elems-video')
videoBtn.addEventListener('click', function() {
  videoImg.classList.add('none')
  videoBtn.classList.add('none')
  videoWrapper.classList.remove('elems-video_after')

  if(videoVideo.paused){
    videoVideo.play()
  }

}) 

videoVideo.addEventListener('click', function() {
  if(videoVideo.paused){
    videoVideo.play()
  } else {
    videoVideo.pause()
    videoBtn.classList.remove('none')
  }
})

const menu = document.querySelector('#open-btn')
const menuclose = document.querySelector('#close-btn')
const mobile = document.querySelector('.mobile-nav')
const header = document.querySelector('.header')
const casestudies = document.querySelector('.casestudies')
const videohtml = document.querySelector('.video')
const footer = document.querySelector('.footer')

menu.addEventListener('click', ()=> {
  mobile.classList.remove('none')
  header.classList.add('none')
  casestudies.classList.add('none')
  videohtml.classList.add('none')
  footer.classList.add('none')

})
menuclose.addEventListener('click', ()=>{
  mobile.classList.add('none')
  header.classList.remove('none')
  casestudies.classList.remove('none')
  videohtml.classList.remove('none')
  footer.classList.remove('none')
})

