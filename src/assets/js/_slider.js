// import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

export default function Slider() {
  window.addEventListener("load", function () {
    initSwiper(); // ページ読み込み後に初期化
  });

  const breakPoint = 768; // ブレークポイントを設定
  let swiper;
  let swiperBool;

  window.addEventListener(
    "load",
    () => {
      if (breakPoint < window.innerWidth) {
        swiperBool = false;
      } else {
        createIntroSwiper();
        createHowtoSwiper();
        swiperBool = true;
      }
    },
    false
  );

  window.addEventListener(
    "resize",
    () => {
      if (breakPoint < window.innerWidth && swiperBool) {
        swiper.destroy(false, true);
        swiperBool = false;
      } else if (breakPoint >= window.innerWidth && !swiperBool) {
        createIntroSwiper();
        createHowtoSwiper();
        swiperBool = true;
      }
    },
    false
  );

  const createIntroSwiper = () => {
    swiper = new Swiper(".js-slider-intro", {
      modules: [Autoplay],
      slidesPerView: "auto",
      spaceBetween: 8,
      loop: true,
      speed: 8000,
      loopedSlides: 2,
      allowTouchMove: false,
      watchSlidesProgress: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
    });
  };

  const createHowtoSwiper = () => {
    swiper = new Swiper(".js-slider-howto", {
      spaceBetween: 6,
      loop: false,
      speed: 1000,
      watchSlidesProgress: true,
    });
  };
}
