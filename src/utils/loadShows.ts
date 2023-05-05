// Implement a "loadShows" function that loads a series of "TVShow" objects from the JSON file included in the project.

import { Show } from '../models/Show';
import { TVShow } from '../models/TVShow';


const show1 = {
  "title": "The Mandalorian",
  "genre": "Action",
  "rating": 8.8,
  "status": "Ongoing",
  "airingDate": "2019-11-12"
}

const show2 = {
  "title": "The Office",
  "genre": "Comedy",
  "rating": 8.9,
  "status": "Completed",
  "airingDate": "2005-03-24"
}

enum Order {
  asc = "ascending",
  desc = "descending"
}

export type ValidateSortingKeys = "rating" | "airingDate"
interface SortInterface {
  key: ValidateSortingKeys,
  order: typeof Order
}

function compare<T>(obj1: T, obj2: T, key: keyof T){
  if (obj1[key] < obj2[key]){
    return -1
  }
  if (obj1[key] === obj2[key]){
    return 0
  }
  return 1
}

export const loadShows = (showData: Show[], sort?: SortInterface) => {
  // const key = sort?.key as keyof Show
  const key: ValidateSortingKeys = "rating"
  return showData.sort((showA: Show, showB: Show) => compare(showA, showB, key))
}
