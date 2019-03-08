import { LOCATION_UPDATE } from './types';

export const updateLocation = place_name => (
  {
    type: LOCATION_UPDATE,
    payload: place_name,
  }
);
