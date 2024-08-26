const scroller = document.getElementById("progress-scroll");

if (scroller) {
  scroller.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const progressPath = document.querySelector('.progress-wrap path');

  if (progressPath) {
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    window.addEventListener('scroll', updateProgress);

    const offset = 50;

    window.addEventListener('scroll', () => {
      if (window.scrollY > offset) {
        const progressWrap = document.querySelector('.progress-wrap');
        if (progressWrap) {
          progressWrap.classList.add('active-progress');
        }
      } else {
        const progressWrap = document.querySelector('.progress-wrap');
        if (progressWrap) {
          progressWrap.classList.remove('active-progress');
        }
      }
    });
  }
});

/*our partner*/
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 767) {
      const carousel = document.querySelector('.work-process-carousel');
      const items = carousel.querySelectorAll('.work-process-one__item');
      let currentIndex = 0;
      let intervalId;
      let touchStartX = 0;
      let touchEndX = 0;

      // Add navigation buttons
      const nav = document.createElement('div');
      nav.className = 'carousel-nav';
      // nav.innerHTML = '<button class="prev">&lt;</button><button class="next">&gt;</button>';
      carousel.after(nav);

      function showItem(index) {
          items.forEach(item => item.classList.remove('active'));
          items[index].classList.add('active');
      }

      function nextItem() {
          currentIndex = (currentIndex + 1) % items.length;
          showItem(currentIndex);
      }

      function prevItem() {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          showItem(currentIndex);
      }

      function startAutoScroll() {
          intervalId = setInterval(nextItem, 3000); // Change slide every 3 seconds
      }

      function stopAutoScroll() {
          clearInterval(intervalId);
      }

      // Gesture handling
      function handleGesture() {
          if (touchEndX < touchStartX) {
              stopAutoScroll();
              nextItem();
              startAutoScroll();
          }
          if (touchEndX > touchStartX) {
              stopAutoScroll();
              prevItem();
              startAutoScroll();
          }
      }

      // Touch event listeners
      carousel.addEventListener('touchstart', function(e) {
          touchStartX = e.changedTouches[0].screenX;
      });

      carousel.addEventListener('touchend', function(e) {
          touchEndX = e.changedTouches[0].screenX;
          handleGesture();
      });

      // Event listeners for navigation buttons
      // nav.querySelector('.next').addEventListener('click', function() {
      //     stopAutoScroll();
      //     nextItem();
      //     startAutoScroll();
      // });

      // nav.querySelector('.prev').addEventListener('click', function() {
      //     stopAutoScroll();
      //     prevItem();
      //     startAutoScroll();
      // });

      // Event listeners for pause on hover
      carousel.addEventListener('mouseenter', stopAutoScroll);
      carousel.addEventListener('mouseleave', startAutoScroll);

      // Initialize the carousel
      showItem(currentIndex);
      startAutoScroll();
  }
});/*our partner*/
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 767) {
      const carousel = document.querySelector('.work-process-carousel');
      const items = carousel.querySelectorAll('.work-process-one__item');
      let currentIndex = 0;
      let intervalId;
      let touchStartX = 0;
      let touchEndX = 0;

      // Add navigation buttons
      const nav = document.createElement('div');
      nav.className = 'carousel-nav';
      // nav.innerHTML = '<button class="prev">&lt;</button><button class="next">&gt;</button>';
      carousel.after(nav);

      function showItem(index) {
          items.forEach(item => item.classList.remove('active'));
          items[index].classList.add('active');
      }

      function nextItem() {
          currentIndex = (currentIndex + 1) % items.length;
          showItem(currentIndex);
      }

      function prevItem() {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          showItem(currentIndex);
      }

      function startAutoScroll() {
          intervalId = setInterval(nextItem, 3000); // Change slide every 3 seconds
      }

      function stopAutoScroll() {
          clearInterval(intervalId);
      }

      // Gesture handling
      function handleGesture() {
          if (touchEndX < touchStartX) {
              stopAutoScroll();
              nextItem();
              startAutoScroll();
          }
          if (touchEndX > touchStartX) {
              stopAutoScroll();
              prevItem();
              startAutoScroll();
          }
      }

      // Touch event listeners
      carousel.addEventListener('touchstart', function(e) {
          touchStartX = e.changedTouches[0].screenX;
      });

      carousel.addEventListener('touchend', function(e) {
          touchEndX = e.changedTouches[0].screenX;
          handleGesture();
      });

      // Event listeners for navigation buttons
      // nav.querySelector('.next').addEventListener('click', function() {
      //     stopAutoScroll();
      //     nextItem();
      //     startAutoScroll();
      // });

      // nav.querySelector('.prev').addEventListener('click', function() {
      //     stopAutoScroll();
      //     prevItem();
      //     startAutoScroll();
      // });

      // Event listeners for pause on hover
      carousel.addEventListener('mouseenter', stopAutoScroll);
      carousel.addEventListener('mouseleave', startAutoScroll);

      // Initialize the carousel
      showItem(currentIndex);
      startAutoScroll();
  }
});