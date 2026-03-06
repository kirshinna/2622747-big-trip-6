import { getRandomArrayElement, getRandomInteger, getRandomBoolean } from '../utils.js';
import { POINT_TYPES } from '../const.js';
import { mockDestination } from './destinations.js';
import { generateSelectedOffers } from './offers.js';

const generatePoint = (destinations) => {
  const type = getRandomArrayElement(POINT_TYPES);
  const destination = getRandomArrayElement(destinations);
  const startDate = new Date();
  startDate.setHours(startDate.getHours() + getRandomInteger(1, 48));
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + getRandomInteger(1, 5));

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(500, 10000),
    dateFrom: startDate,
    dateTo: endDate,
    destination: destination.id,
    isFavorite: getRandomBoolean(),
    offers: generateSelectedOffers(type),
    type
  };
};

const mockPoints = Array.from({length: 5}, () => generatePoint(mockDestination));

export {mockPoints};
