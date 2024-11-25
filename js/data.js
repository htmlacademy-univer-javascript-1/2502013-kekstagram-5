/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
import {getRandomInteger, createRandomId} from './util.js';

const commentCount = 30;
const photosCount = 25;
const avatarsCount = 6;
const likesMinCount = 15;
const likesMaxCount = 200;

const DESCRIPTIONS = [
  'Какой вчера был замечательный вечер!',
  'Всем добра',
  'Ставь лайк, если любишь html academy',
  'Кто поставит лайк, тот найдет айфон под подушкой!',
  'Любите эту жизнь! Кайфуйте!!!',
  'Как придумать интересную подпись??',
  'Мне просто надо пережить эту неделю...',
  'Я - лучше всех!',
  'А вы знаете, что скоро ретроградный меркурий?...'
];

// массив имен комментаторов
const NAMES = [
  'Михаил',
  'Анастасия',
  'Лизабетка',
  'Мария',
  'Никита',
  'Андрей',
  'Максим',
  'Александра'
];

// массив предложений для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Ну и кринж ты постишь...',
  'Вау!!!',
  'Почему столько негатива в комментариях?',
  'Это я, твой единственный подписчик...',
  'Сколько можно танцевать?',
  'Ты пикми или найк про?',
  'Ты волшебник, Гарри',
  'Чебурашка, ну где там полотенце?'
];


// генерация индекса комментария
const generateCommentId = createRandomId(1, commentCount);

//генерация одного комментария
const createComments = () => ({
  id: generateCommentId(),
  avatar: (`img/avatar-${getRandomInteger(1, avatarsCount)}.svg`),
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]

});

// генерация индекса фото
const generateId = createRandomId(1, photosCount);
const generatePhotoId = createRandomId(1, photosCount);

//генерация одного объекта с описанием
const createPublication = () => ({
  id: generateId(),
  url: (`photos/${generatePhotoId()}.jpg`),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(likesMinCount, likesMaxCount),
  comments: Array.from({length: getRandomInteger(0, commentCount)}, createComments) // массив комментариев
});

// массив публикаций (объект с описанием, лайками и т.д.)
const arrayPublications = Array.from({length: photosCount}, createPublication);

export {arrayPublications};
