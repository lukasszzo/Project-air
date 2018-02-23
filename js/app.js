document.addEventListener('DOMContentLoaded', function() {
    const inputCity=document.getElementById('inputCity');
    var slider = document.querySelector('#main-slider');
      var prev = slider.querySelector(':scope .left');
      var next = slider.querySelector(':scope .right');
      var slides = slider.querySelectorAll(':scope .slide');
      var currentSlide = 0;
      var timer = null;
      var timeDelay = 5000;

      var timeoutNextSlide = function() {
          timer = setTimeout(function() {
              next.click();
          }, timeDelay);
      };

      var prevSlide = function() {
          for (var i=0; i<slides.length; i++) {
              slides[i].classList.remove('active');
          }
          currentSlide--;

          if (currentSlide < 0) {
              currentSlide = slides.length-1;
          }

          slides[currentSlide].classList.add('active');

          clearTimeout(timer);
          timeoutNextSlide();
      };

      var nextSlide = function() {
          for (var i=0; i<slides.length; i++) {
              slides[i].classList.remove('active');
          }

          currentSlide++;

          if (currentSlide > slides.length-1) {
              currentSlide = 0;
          }

          slides[currentSlide].classList.add('active');

          clearTimeout(timer);
          timeoutNextSlide();
      };

      timeoutNextSlide();

      prev.addEventListener('click', prevSlide);
      next.addEventListener('click', nextSlide);
      var boxes = document.querySelectorAll('.picture-cnt');
          var markBox = function(e) {
              e.preventDefault();

              for (var i=0; i<boxes.length; i++) {
                  boxes[i].classList.remove('active-box');
              }

              e.currentTarget.classList.add('active-box');
          };

          for (var i=0; i<boxes.length; i++) {
              boxes[i].addEventListener('click', markBox)
          }

          })
          function progressBar() {
            var windowTop = window.scrollY,
              documentHeight = document.documentElement.scrollHeight,
              windowHeight = window.innerHeight;

            var totalScroll = (windowTop/(documentHeight-windowHeight))*100;

            document.querySelector('.progress-bar-scrolling').style.width = totalScroll+'%';
          }

          window.addEventListener('scroll', progressBar);

          $
