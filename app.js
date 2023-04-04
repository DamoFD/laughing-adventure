document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  track.onmousemove = (e) => {
    const nextPercentage =
      parseFloat(track.dataset.prevPercentage) + percentage;

    const clampedPercentage = Math.min(Math.max(nextPercentage, -100), 0);

    track.dataset.percentage = clampedPercentage;

    track.animate(
      {
        transform: `translate(${clampedPercentage}%, 0%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image-track__image")) {
      const newPosition = `${100 + clampedPercentage}% center`;
      image.animate(
        {
          objectPosition: newPosition,
        },
        { duration: 1200, fill: "forwards" }
      );
    }

    e.preventDefault();
  };

  let scrollDirection = 1;
  let nextPercentage;

  const autoScroll = () => {
    const currentPercentage = parseFloat(track.dataset.percentage);
    nextPercentage = currentPercentage - 0.1 * scrollDirection;

    const mobileBreakpoint = 768;
    const mobilePercentage = -100;

    if (nextPercentage >= 0) {
      scrollDirection = 1;
    } else if (
      window.innerWidth <= mobileBreakpoint &&
      nextPercentage <= mobilePercentage
    ) {
      scrollDirection = -1;
    } else if (window.innerWidth > mobileBreakpoint && nextPercentage <= -62) {
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
  autoScroll();

  // Prevent dragging behavior on some browsers
  track.ondragstart = (e) => {
    e.preventDefault();
  };

  // Get the images
  const welcomeImg1 = document.querySelector(".welcome__img1");
  const welcomeImg2 = document.querySelector(".welcome__img2");

  // Function to update the image position based on the scroll
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const yPercentage = (scrollTop * -0.05) % 100; // Adjust the multiplier (0.05) based on your preference
    const xPercentage = (scrollTop * -0.05) % 100;

    // Update the image positions
    const newYPosition = `center ${100 + yPercentage}%`;
    const newXPosition = `${100 + xPercentage}% center`;
    welcomeImg1.animate(
      {
        objectPosition: newXPosition,
      },
      { duration: 1200, fill: "forwards" }
    );
    welcomeImg2.animate(
      {
        objectPosition: newYPosition,
      },
      { duration: 1200, fill: "forwards" }
    );
  }

  // Add the scroll event listener
  window.addEventListener("scroll", handleScroll, { passive: true });

  document.getElementById("menuToggle").addEventListener("click", function () {
    document.body.classList.toggle("disable-scroll");
  });

  ("use strict");

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
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
      onInitialized: function () {
        const carouselItems = $(".owl-carousel1 .owl-dots .owl-dot");
        carouselItems.each(function (index) {
          const id = "testimonial-" + (index + 1);
          $(this).attr("id", id);
        });
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
});
