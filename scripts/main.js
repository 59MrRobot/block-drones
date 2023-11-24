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

const TAB1 = document.getElementById('tab-1');
const TAB2 = document.getElementById('tab-2');
const TAB3 = document.getElementById('tab-3');
const IMAGE1 = document.getElementById('image-1');
const IMAGE2 = document.getElementById('image-2');
const IMAGE3 = document.getElementById('image-3');

TAB1.addEventListener('click', () => {
  TAB1.classList.add('tabs__item--active');
  TAB2.classList.remove('tabs__item--active');
  TAB3.classList.remove('tabs__item--active');

  IMAGE1.classList.add('slider__image--active');
  IMAGE2.classList.remove('slider__image--active');
  IMAGE3.classList.remove('slider__image--active');
});

TAB2.addEventListener('click', () => {
  TAB1.classList.remove('tabs__item--active');
  TAB2.classList.add('tabs__item--active');
  TAB3.classList.remove('tabs__item--active');

  IMAGE1.classList.remove('slider__image--active');
  IMAGE2.classList.add('slider__image--active');
  IMAGE3.classList.remove('slider__image--active');
});

TAB3.addEventListener('click', () => {
  TAB1.classList.remove('tabs__item--active');
  TAB2.classList.remove('tabs__item--active');
  TAB3.classList.add('tabs__item--active');

  IMAGE1.classList.remove('slider__image--active');
  IMAGE2.classList.remove('slider__image--active');
  IMAGE3.classList.add('slider__image--active');
});

let userCreds = JSON.parse(sessionStorage.getItem('user-creds'));
let userInfo = JSON.parse(sessionStorage.getItem('user-info'));
const SIGN_OUT = document.getElementById('sign-out');
const LOGIN = document.getElementById('login-button');
const SIGNUP = document.getElementById('signup-button');
const SIGN_OUT_MENU = document.getElementById('sign-out-menu');
const LOGIN_MENU = document.getElementById('login-button-menu');
const SIGNUP_MENU = document.getElementById('signup-button-menu');
const WELCOME = document.getElementById('welcome');

const signout = () => {
  sessionStorage.removeItem('user-creds');
  sessionStorage.removeItem('user-info');
  window.location.href = 'index.html';
}

const checkCredentials = () => {
  if (!sessionStorage.getItem('user-creds')) {
    window.location.href = 'index.html';
  }
}

SIGN_OUT.addEventListener('click', signout);
SIGN_OUT_MENU.addEventListener('click', signout);

if (!sessionStorage.getItem('user-creds')) {
  SIGN_OUT.style.display = 'none';
  LOGIN.style.display = 'unset';
  SIGNUP.style.display = 'unset';

  SIGN_OUT_MENU.style.display = 'none';
  LOGIN_MENU.style.display = 'unset';
  SIGNUP_MENU.style.display = 'unset';

  WELCOME.style.display = 'none';
} else {
  SIGN_OUT.style.display = 'unset';
  LOGIN.style.display = 'none';
  SIGNUP.style.display = 'none';

  SIGN_OUT_MENU.style.display = 'unset';
  LOGIN_MENU.style.display = 'none';
  SIGNUP_MENU.style.display = 'none';

  WELCOME.style.display = 'unset';
  WELCOME.innerText = `Welcome, ${userInfo.firstName}`;
}

