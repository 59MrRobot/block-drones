const WELCOME = document.getElementById('welcome');
let userInfo = JSON.parse(sessionStorage.getItem('user-info'));

if (sessionStorage.getItem('signedIn') === 'true') {
  WELCOME.innerText = `Welcome, ${userInfo.firstName}`
}

const SIGN_OUT = document.getElementById('sign-out');
const SIGN_OUT_MENU = document.getElementById('sign-out-menu');

const signout = () => {
  sessionStorage.removeItem('user-creds');
  sessionStorage.removeItem('user-info');
  sessionStorage.setItem('signedIn','false');
  window.location.href = '../index.html';
}

SIGN_OUT.addEventListener('click', signout);
SIGN_OUT_MENU.addEventListener('click', signout);

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

const LOGIN_MENU = document.getElementById('login-button-menu');
const SIGNUP_MENU = document.getElementById('signup-button-menu');

if (sessionStorage.getItem('signedIn') === 'false') {
  LOGIN_MENU.style.display = 'unset';
  SIGNUP_MENU.style.display = 'unset';
} else {
  LOGIN_MENU.style.display = 'none';
  SIGNUP_MENU.style.display = 'none';
}

const USER_NAME = document.getElementById('user-name');
const MEMBERSINCE = document.getElementById('member-since');

const dateArray = userInfo.createdAt.split(' ');

MEMBERSINCE.innerText = `${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`;
MEMBERSINCE.innerText = `${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`;

const JOBS = document.getElementsByClassName('dashboard__item');
let NUMBER_OF_PAGES = JOBS.length % 3 === 0 ? JOBS.length / 3 : Math.ceil(JOBS.length / 3);
let index = 0;

while (NUMBER_OF_PAGES > 0) {
  for (let i = index; i < index + 3; i++) {
    JOBS[i].style.display = 'unset';
  }

  NUMBER_OF_PAGES--;
  index += 3;
}