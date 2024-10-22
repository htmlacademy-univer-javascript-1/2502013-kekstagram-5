import {getRandomInteger, createRandomId} from './util';

const DESCRIPTIONS = [
  'Какой вчера был замечательный вечер!',
  'Всем добра',
  'Ставь лайк, если любишь html academy',
  'Кто поставит лайк, тот найдет айфон под подушкой!',
  'Кайфуйте!!!'
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
  'Сколько можно танцевать?',
  'Ты пикми или найк про?',
  'Ты волшебник, Гарри',
  'Чебурашка, ну где там полотенце?'
];


// генерация индекса комментария
const generateCommentId = createRandomId(1, 30);

//генерация одного комментария
const createComments = () => ({
  id: generateCommentId(),
  avatar: ('img/avatar-', getRandomInteger(1, 6), '.svg'),
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]

});

// генерация индекса фото
const generateId = createRandomId(1, 25);

//генерация одного объекта с описанием
const createPublication = () => ({
  id: generateId(),
  url: ('photos/', getRandomInteger(1, 25), '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0,30)}, createComments) // массив комментариев
});

// массив описаний фотографий
const arrayPublications = () => Array.from({length: 25}, createPublication);

export {arrayPublications};
