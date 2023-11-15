'use strict';

const PREVIOUS = document.getElementById('previous');
const NEXT = document.getElementById('next');
let index = 0;
const SLIDER = document.getElementById('slider');
const BACKTOTOP = document.getElementById('back-to-top');

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

window.onscroll = () => {
  if (
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
  ) {
    BACKTOTOP.style.display = 'block';
  } else {
    BACKTOTOP.style.display = 'none';
  }
};
