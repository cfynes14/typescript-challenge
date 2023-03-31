// Implement a "loadShows" function that loads a series of "TVShow" objects from the JSON file included in the project.

import { Show } from '../models/Show';
import { TVShow } from '../models/TVShow';

export const loadShows = (showData: Show[]) =>
  showData.map(show => new TVShow(show));
