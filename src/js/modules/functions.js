import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import Atropos from 'atropos';
import AOS from '../../../node_modules/aos/dist/aos.js';

gsap.registerPlugin(ScrollTrigger);

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

// (gist - b47008824b0175d587f9acbc51892319)

export const anchors = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu');
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      body.classList.remove('lock');
      menu.classList.remove('active');

      const blockID = anchor.getAttribute('href').substr(1);

      console.log(document.getElementById(blockID));

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('#menu-open-btn')) {
    const openBtn = document.querySelector('#menu-open-btn');
    const closeBtn = document.querySelector('#menu-close-btn');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    let toggleBurger = (type) => {
      if (type === 'open') {
        openBtn.classList.add('active');
        menu.classList.add('active');
        body.classList.add('lock');
      } else {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
      }
    };

    openBtn.addEventListener('click', () => toggleBurger('open'));
    closeBtn.addEventListener('click', () => toggleBurger('close'));
  }
};

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn');
    const closeBtn = document.querySelector('.modal-body__close');
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modal__bg');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1208px`;
            item.style.padding = ` 0 24px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1208 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 24}px 0 24px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
  }
};

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) {
    // disable script if resolution less than 1000px

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
  }
};

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
};

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById('myHeader');

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
};

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const upBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('._up-btn');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 300) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 1000,
      });
    };
  });
};

export const sequenceAnimation = () => {
  if (document.querySelector('.sequence')) {
    const root = document.querySelector('.sequence');
    const isMobile = window.innerWidth < 767;
    const canvasRef = root.querySelector('#canvas-sequence');
    const progressPagination = root.querySelector(
      '#sequence-pagination-current'
    );
    const pinCon = document.querySelector('.pin-con');
    const circleProgress = root.querySelector('.sequence-pagination__circle');
    const sequenceContentFirst = root.querySelector('#sequence-item-1');
    let context = canvasRef.getContext('2d');
    canvasRef.width = isMobile ? 430 : 1920;
    canvasRef.height = isMobile ? 932 : 1080;

    let frameCount = 121;
    const currentFrame = (index) =>
      `./img/sequence${isMobile ? '/mobile' : ''}/${(index + 1)
        .toString()
        .padStart(4, '0')}.jpg`;

    let images = [];
    let airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvasRef.width, canvasRef.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }

    if (isMobile) {
      gsap
        .timeline({
          onUpdate: render,
          scrollTrigger: {
            trigger: '.sequence',
            pin: true,
            scrub: 0.5,
            markers: false,
            start: 'top - 100',
            end: '+=400%',

            onToggle: (self) => {
              if (self.isActive) {
                pinCon.classList.add('active');
              } else {
                pinCon.classList.remove('active');
              }
            },
            onEnterBack: (self) => {
              pinCon.classList.remove('leave');
            },
            onLeave: (self) => {
              pinCon.classList.add('leave');
            },
          },
        })
        .to(
          airpods,
          {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            duration: 2.9,
          },
          0
        )
        .from(
          '#sequence-item-mobile-1',
          { opacity: 0, y: 100 },

          0.1
        )
        .to('#sequence-item-mobile-1', { opacity: 0, y: -100 }, 0.6)
        .from('#sequence-item-mobile-2', { opacity: 0, y: 100 }, 1.0)
        .to('#sequence-item-mobile-2', { opacity: 0, y: -100 }, 1.5)
        .from('#sequence-item-mobile-3', { opacity: 0, y: 100 }, 1.9)
        .to('#sequence-item-mobile-3', { opacity: 0, y: -100 }, 2.4);
      // .to(
      //   '.sequence-body__wrapper',
      //   {
      //     y: `-${
      //       isMobile
      //         ? sequenceContentFirst.scrollHeight
      //         : sequenceContentFirst.scrollHeight + 100
      //     }px`,
      //   },
      //   1.2
      // );
    } else {
      gsap
        .timeline({
          onUpdate: render,
          scrollTrigger: {
            trigger: '.sequence',
            pin: true,
            // pin: '.pin-con',
            scrub: 0.5,
            markers: true,
            start: 'top - 100',
            // start: 'top 80%',
            // start: '-=700px',
            end: '+=250%',

            onToggle: (self) => {
              if (self.isActive) {
                pinCon.classList.add('active');
              } else {
                pinCon.classList.remove('active');
              }
            },

            // onEnter: (self) => {
            //   pinCon.classList.remove('back');
            // },
            onEnterBack: (self) => {
              pinCon.classList.remove('leave');
            },
            onLeave: (self) => {
              pinCon.classList.add('leave');
            },

            onUpdate: (self) => {
              circleProgress.style = `--p:${Math.round(self.progress * 100)}`;

              if (self.progress > 0.77) {
                progressPagination.innerHTML = 2;
              } else {
                progressPagination.innerHTML = 1;
              }
            },
          },
        })
        .to(
          airpods,
          {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            duration: 1.8,
          },
          0
        )
        .from('#sequence-item-1', { opacity: 0, y: 100 }, 0.8)
        .to(
          '.sequence-body__wrapper',
          {
            y: `-${
              isMobile
                ? sequenceContentFirst.scrollHeight
                : // : sequenceContentFirst.scrollHeight + 100
                  sequenceContentFirst.scrollHeight
            }px`,
          },
          1.2
        )
        .from('#sequence-item-2', { opacity: 0 }, 1.3)
        .to('#sequence-item-1', { opacity: 0 }, 1.25);
    }
  }
};

export const faqAccordion = () => {
  if (document.querySelector('.faq-body__item')) {
    const accordionList = document.querySelectorAll('.faq-body__item');

    accordionList.forEach((item) =>
      item.addEventListener('click', (event) => {
        const { target } = event;
        const answerContent = item.querySelector('.faq-body__item-answer');

        if (target.closest('.faq-body__item-question')) {
          if (item.classList.contains('open')) {
            item.classList.remove('open');
            answerContent.style.height = '0';
          } else {
            item.classList.add('open');
            answerContent.style.height = `${answerContent.scrollHeight}px`;
          }
        }
      })
    );
  }
};

export const aboutPlayVideo = () => {
  if (document.querySelector('.about-video')) {
    const videoBlock = document.querySelector('.about-video');
    const videoItem = videoBlock.querySelector('video');
    const preview = videoBlock.querySelector('._preview');
    const playBtn = videoBlock.querySelector('.about-video__play');

    playBtn.addEventListener('click', () => {
      preview.style.display = 'none';
      videoItem.play();
      videoBlock.classList.add('play');
    });
  }
};

export const rewardsHoverPlayAnimation = () => {
  if (document.querySelector('#rewards-anim')) {
    const isMobile = window.innerWidth < 767;

    const HTMLBlock = document.querySelector('#rewards-anim-card');
    const animItem = document.querySelector('#rewards-anim');
    HTMLBlock.addEventListener('mouseenter', () => {
      animItem.play();
    });
    HTMLBlock.addEventListener('mouseleave', () => {
      animItem.pause();
    });

    if (isMobile) {
      animItem.play();
    }
  }
};

export const themeSwitcher = () => {
  if (document.querySelector('.header-body__nav-theme')) {
    const btn = document.querySelector('.header-body__nav-theme');
    const body = document.querySelector('body');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const setTheme = (theme) => {
      if (theme === 'dark') {
        body.classList.remove('_light-theme');
      } else {
        body.classList.add('_light-theme');
      }
    };

    const switchTheme = () => {
      if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
        currentTheme = 'light';
        body.classList.add('_light-theme');
      } else {
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
        body.classList.remove('_light-theme');
      }
    };

    window.addEventListener('load', () => setTheme(currentTheme));
    btn.addEventListener('click', switchTheme);
  }
};

export const atroposAnim = () => {
  if (document.querySelector('.atropos-main-btn') && window.innerWidth > 767) {
    const btnArr = document.querySelectorAll('.atropos-main-btn');

    btnArr.forEach((item) => {
      const btnAtropos = Atropos({
        el: item,
        shadow: false,
        highlight: false,
      });
    });
  }
};

export const mobileFadeUp = () => {
  AOS.init({
    duration: 600,
    once: true,
  });
  // if (window.innerWidth < 768) {
  // }
};
