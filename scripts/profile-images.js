let userInfo = JSON.parse(sessionStorage.getItem('user-info'));

const IMAGES = document.getElementsByClassName('profile-image');

for (let i = 0; i < IMAGES.length; i++) {
  IMAGES[i].src = userInfo.imageUrl;
}