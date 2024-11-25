// eslint-disable-next-line no-unused-vars
import {openBigPicture} from './big-picture.js';
const pictireTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон
const pictures = document.querySelector('.pictures'); // все картинки

const createElement = (picture) => {
  const {url, description, likes, comments} = picture;
  const newMiniature = pictireTemplate.cloneNode(true); // клонируем шаблон

  newMiniature.querySelector('.picture__img').src = url;
  newMiniature.querySelector('.picture__img').alt = description;
  newMiniature.querySelector('.picture__likes').innerHTML = likes;
  newMiniature.querySelector('.picture__comments').innerHTML = comments.length;

  const onNewMiniatureClick = (evt) => {
    evt.preventDefault();
    openBigPicture(picture); // при нажатии на миниатюру открыть большую картинку
  };

  newMiniature.addEventListener('click', onNewMiniatureClick); // обработчик клика на миниатюру

  return newMiniature;
};

const createElements = (photos) => {
  const pictureListFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    pictureListFragment.appendChild(createElement(photo));
  });

  pictures.appendChild(pictureListFragment);
};

export {createElements};
