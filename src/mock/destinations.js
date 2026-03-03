import { getRandomArrayElement, getRandomInteger} from '../utils.js';

const CITIES = [
  'Amsterdam', 'Geneva', 'Chamonix', 'Paris', 'London',
  'Berlin', 'Rome', 'Madrid', 'Vienna', 'Prague'
];

const CITY_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const generateRandomPictures = () => ({
  src: `https://24.objects.htmlacademy.pro/static/destinations/${getRandomInteger(1, 30)}.jpg`,
  description: getRandomArrayElement(CITY_DESCRIPTIONS)
});

const generateDestination = () => ({
  id: crypto.randomUUID(),
  description: getRandomArrayElement(CITY_DESCRIPTIONS),
  name: getRandomArrayElement(CITIES),
  pictures: Array.from({length: getRandomInteger(2, 4)}, generateRandomPictures)
});

const mockDestination = Array.from({length: 5}, generateDestination);

export { mockDestination };

