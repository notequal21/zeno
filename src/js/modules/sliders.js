import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Grid,
  Manipulation,
  Autoplay,
} from 'swiper/modules';
import { popularCategoryArr } from './popularCategoryArr.js';

export const partnersSlider = () => {
  if (document.querySelector('.partners-body')) {
    const isMobile = window.innerWidth < 769;

    const partnersSwiper = new Swiper('.partners-body', {
      modules: [Navigation, Pagination, Grid],

      slidesPerView: 1,
      grid: {
        fill: 'row',
        rows: 1,
      },
      spaceBetween: 10,

      pagination: {
        el: '.partners-pagination',
      },

      navigation: {
        prevEl: `${
          isMobile ? '#partners-slider-mobile-prev' : '#partners-slider-prev'
        }`,
        nextEl: `${
          isMobile ? '#partners-slider-mobile-next' : '#partners-slider-next'
        }`,
      },

      breakpoints: {
        769: {
          slidesPerView: 3,
          grid: {
            fill: 'row',
            rows: 2,
          },
          spaceBetween: 10,
        },
      },
    });
  }
};

export const storiesSlider = () => {
  if (document.querySelector('.stories-body__slider')) {
    const isMobile = window.innerWidth < 767;

    const partnersSwiper = new Swiper('.stories-body__slider', {
      modules: [Navigation, Pagination],

      slidesPerView: 1,
      spaceBetween: 10,

      pagination: {
        el: '.stories-pagination',
      },

      navigation: {
        prevEl: `#stories-slider-prev`,
        nextEl: `#stories-slider-next`,
      },

      breakpoints: {
        650: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
      },
    });
  }
};

export const popularSlider = () => {
  if (document.querySelector('.popular-body__slider')) {
    const filterBtns = document.querySelectorAll('.popular-tags__item');

    const partnersSwiper = new Swiper('.popular-body__slider', {
      modules: [Navigation, Pagination, Manipulation],

      slidesPerView: 1,
      spaceBetween: 10,

      pagination: {
        el: '.popular-body__pagination',
      },

      navigation: {
        prevEl: `#popular-nav-prev`,
        nextEl: `#popular-nav-next`,
      },

      breakpoints: {
        650: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
      },
    });

    const setCurrentCategory = (categoryItem) => {
      filterBtns.forEach((item) => item.classList.remove('active'));
      categoryItem.classList.add('active');
    };

    filterBtns.forEach((item) =>
      item.addEventListener('click', () => {
        const categoryName = item.innerText.toLowerCase().split(' ')[0];
        partnersSwiper.removeAllSlides();
        const slidesArr = popularCategoryArr[categoryName].map((item) => {
          return `
          <div class="swiper-slide">
            <div class="popular-body__card">
              <div class="card-hover">
                <div class="card-hover__icon">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.8801 7.05389C19.9041 7.02994 19.9041 7.02994 19.8801 7.00599C19.8801 6.98204 19.8562 6.95808 19.8562 6.93413C19.8562 6.91018 19.8322 6.91018 19.8322 6.88623C19.8322 6.86228 19.8083 6.83832 19.8083 6.81437C19.8083 6.79042 19.7843 6.79042 19.7843 6.76647C19.7604 6.74251 19.7604 6.71856 19.7364 6.71856L15.1855 2.16766C15.1616 2.14371 15.1137 2.11976 15.0897 2.09581C15.0658 2.09581 15.0658 2.07186 15.0418 2.07186C15.0179 2.0479 14.9939 2.0479 14.97 2.0479C14.946 2.0479 14.946 2.0479 14.9221 2.02395C14.8981 2.02395 14.8741 2 14.8502 2C14.8262 2 14.7783 2 14.7544 2H14.7304H6.41906C5.77235 2 5.1975 2.26347 4.76636 2.69461C4.33522 3.1018 4.0957 3.7006 4.0957 4.32335V19.6527C4.0957 20.2994 4.35918 20.8743 4.79031 21.3054C5.22145 21.7365 5.7963 22 6.44301 22H17.6047C18.2514 22 18.8262 21.7365 19.2574 21.3054C19.6646 20.8743 19.9041 20.2754 19.9041 19.6527V7.17365C19.9041 7.12575 19.9041 7.07784 19.8801 7.05389ZM15.3292 4.08383L17.8203 6.5509H16.455C16.1436 6.5509 15.8801 6.43114 15.6646 6.21557C15.4729 6.02395 15.3292 5.73653 15.3292 5.42515V4.08383ZM18.6825 19.6527C18.6825 19.9641 18.5628 20.2275 18.3472 20.4431C18.1556 20.6347 17.8682 20.7784 17.5568 20.7784H6.41906C6.10768 20.7784 5.84421 20.6587 5.62864 20.4431C5.43702 20.2515 5.29331 19.9641 5.29331 19.6527V4.32335C5.29331 4.01198 5.41307 3.7485 5.62864 3.53293C5.82025 3.34132 6.10768 3.1976 6.41906 3.1976H14.1077V5.42515C14.1077 6.07186 14.3712 6.64671 14.8023 7.07784C15.2334 7.50898 15.8083 7.77246 16.455 7.77246H18.6825V19.6527Z"
                      fill="white" />
                    <path
                      d="M16.4303 9.40234H7.56807C7.23274 9.40234 6.94531 9.66582 6.94531 10.0251C6.94531 10.3844 7.20879 10.6479 7.56807 10.6479H16.4303C16.7657 10.6479 17.0531 10.3844 17.0531 10.0251C17.0531 9.66582 16.7896 9.40234 16.4303 9.40234Z"
                      fill="white" />
                    <path
                      d="M16.4303 13.3281H7.56807C7.23274 13.3281 6.94531 13.5916 6.94531 13.9509C6.94531 14.2862 7.20879 14.5736 7.56807 14.5736H16.4303C16.7657 14.5736 17.0531 14.3102 17.0531 13.9509C17.0291 13.6156 16.7657 13.3281 16.4303 13.3281Z"
                      fill="white" />
                    <path
                      d="M16.4303 17.2578H7.56807C7.23274 17.2578 6.94531 17.5213 6.94531 17.8806C6.94531 18.2159 7.20879 18.5033 7.56807 18.5033H16.4303C16.7657 18.5033 17.0531 18.2398 17.0531 17.8806C17.0291 17.5452 16.7657 17.2578 16.4303 17.2578Z"
                      fill="white" />
                  </svg>
                </div>
                <div class="card-hover__text">
                  More Details
                </div>
              </div>

              <div class="popular-body__card-img">
                <img src="${item.imgLink}" alt="">
              </div>
              <div class="popular-body__card-top">
                <div class="popular-body__card-label">
                  ${item.label}
                </div>
                <div class="popular-body__card-rate">
                  <img src="${item.rateIcon}" alt="">
                  ${item.rate}
                </div>
              </div>
              <div class="popular-body__card-name">
                ${item.name}
              </div>
              <div class="popular-body__card-pos">
                <span></span>
                ${item.pos}
              </div>
            </div>
          </div>`;
        });
        setCurrentCategory(item);

        partnersSwiper.appendSlide(slidesArr);
      })
    );
  }
};

export const videoInfoSlider = () => {
  if (document.querySelector('.about-col__slider')) {
    const partnersSwiper = new Swiper('.about-col__slider', {
      modules: [Pagination, Autoplay],

      slidesPerView: 1,
      spaceBetween: 40,

      autoplay: {
        delay: 3000,
      },

      pagination: {
        el: '.about-col__pagination',
      },
    });
  }
};

export const teachersSlider = () => {
  if (document.querySelector('.teachers-slider')) {
    const isMobile = window.innerWidth < 767;

    const partnersSwiper = new Swiper('.teachers-slider', {
      modules: [Navigation, Pagination],

      slidesPerView: 1,
      spaceBetween: 10,

      pagination: {
        el: isMobile ? '.teachers-pagination' : '.teachers-nav__pagination',
      },

      navigation: {
        prevEl: `#teachers-nav-prev`,
        nextEl: `#teachers-nav-next`,
      },

      breakpoints: {
        767: {
          spaceBetween: 50,
        },
      },
    });
  }
};
