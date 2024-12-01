let swiperCards = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20, // Espaço entre os slides
    grabCursor: true,
    slidesPerView: 3, // Mostra 3 slides por padrão
    centeredSlides: false, // Remove o foco no slide do centro
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      530: { 
        slidesPerView: 1, // Mostra 1 slide em telas até 530px de largura
      },
      1040: { 
        slidesPerView: 2, // Mostra 2 slides em telas até 1040px de largura
      },
      1920: {
        slidesPerView: 3, // Mostra 3 slides em telas maiores que 1040px
      }
    },
  });
  