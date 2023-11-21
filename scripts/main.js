'use strict';

const PREVIOUS = document.getElementById('previous');
const NEXT = document.getElementById('next');
let index = 0;
const SLIDER = document.getElementById('slider');

PREVIOUS.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = 2;
  }

  SLIDER.style.transform = `translateX(${index * -100}vw)`;
});

NEXT.addEventListener('click', () => {
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }

  SLIDER.style.transform = `translateX(${index * -100}vw)`;
});

const BACKTOTOP = document.getElementById('back-to-top');

window.onscroll = () => {
  if (
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
  ) {
    BACKTOTOP.style.display = 'block';
  } else {
    BACKTOTOP.style.display = 'none';
  }
};

const MENUTOGGLEOPEN = document.getElementById('menu-toggle-open');
const MENUTOGGLECLOSE = document.getElementById('menu-toggle-close');
const MENU = document.getElementById('menu');
const MENULINKS = document.getElementsByClassName('menu__link');
const HTML = document.getElementById('html');

MENUTOGGLEOPEN.addEventListener('click', () => {
  MENU.style.transform = 'translateY(0)';
  HTML.style.overflowY = 'hidden';
});

MENUTOGGLECLOSE.addEventListener('click', () => {
  MENU.style.transform = 'translateY(-100vh)';
  HTML.style.overflowY = 'scroll';
});

for (let i = 0; i < MENULINKS.length; i++) {
  MENULINKS[0].addEventListener('click', () => {
    MENU.style.transform = 'translateY(-100vh)';
    HTML.style.overflowY = 'scroll';
  })
}
