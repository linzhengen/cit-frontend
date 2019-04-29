import _ from 'lodash';
import reportFrom from '@/data/reportForm';
import places from '@/data/places';

/* eslint-disable import/prefer-default-export */
export const typeName = (type) => {
  const typeForm = _.find(reportFrom, data => data.name === 'type');
  const typeOption = _.find(typeForm.options, data => data.key === parseInt(type, 10));
  if (typeOption) {
    return typeOption.label;
  }
  return '';
};

export const placeName = (place, type) => {
  if (type in places) {
    const typePlace = _.find(places[type], data => data.key === place);
    if (typePlace) {
      return typePlace.label;
    }
  }
  return '';
};
