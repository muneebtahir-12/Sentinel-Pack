 const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });


     document.getElementById('view').addEventListener('click', function () {
    const previews = document.querySelectorAll('.preview');
    previews.forEach(preview => {
      preview.classList.remove('hidden'); // show previews
      preview.classList.add('flex');
    });
    this.style.display = 'none'; // hide "View More"
    document.getElementById('view-less').style.display = 'inline-block';
  });

  document.getElementById('view-less').addEventListener('click', function (){
    const previews = document.querySelectorAll('.preview');
    previews.forEach(preview => {
      preview.classList.add('hidden');
      preview.classList.remove('flex');
    });
    this.style.display = 'none';
    document.getElementById('view').style.display = 'inline-block';
  });

    const swiper = new Swiper('.first-swiper', {
  loop: true,
  pagination: {
    el: '.first-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.custom-next1',
    prevEl: '.custom-prev1',
  },
});

  var secondSwiper = new Swiper(".second-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, 

    navigation: {
      nextEl: ".custom-next2",
      prevEl: ".custom-prev2",
    },
    pagination: {
      el: ".product-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    },
     keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  
  });