import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../styles/components/_swiper.scss';

const swiper = new Swiper('.swiper', {
    loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
    breakpoints: {
        600: {
            slidesPerView: 2, // 常に画像サイズに合わせる
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    grabCursor: true, // カーソルを手の形に変更（UX向上）
});
