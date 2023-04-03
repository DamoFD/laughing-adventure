document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("image-track");
  
    track.onmousemove = (e) => {
       const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  
      const clampedPercentage = Math.min(Math.max(nextPercentage, -100), 0);
  
      track.dataset.percentage = clampedPercentage;
        
      track.animate({
        transform: `translate(${clampedPercentage}%, 0%)`
      }, {duration: 1200, fill: 'forwards' });

      for (const image of track.getElementsByClassName('image-track__image')) {
        const newPosition = `${100 + clampedPercentage}% center`;
        image.animate({
            objectPosition: newPosition,
        }, { duration: 1200, fill: 'forwards' });
    }

      e.preventDefault();
    };

    let scrollDirection = 1;
    let nextPercentage

    const autoScroll = () => {
        const currentPercentage = parseFloat(track.dataset.percentage);
        nextPercentage = currentPercentage - 0.1 * scrollDirection;
        console.log(nextPercentage)

        if (nextPercentage >= 0) {
            scrollDirection = 1;
        } else if (nextPercentage <= -62) {
            scrollDirection = -1;
        }
    
        track.dataset.percentage = nextPercentage;
        track.style.transform = `translate(${nextPercentage}%, 0%)`;
    
        for (const image of track.getElementsByClassName("image-track__image")) {
          image.style.objectPosition = `${100 + nextPercentage}% center`;
        }


            requestAnimationFrame(autoScroll);
      };
    
      // Start auto-scroll
      autoScroll()
  
    // Prevent dragging behavior on some browsers
    track.ondragstart = (e) => {
      e.preventDefault();
    };
  
  
  $(document).ready(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
});