import { Show } from './Show';

export class TVShow {
  private _title: string;
  private _network: string | undefined;
  private _genre: string;
  private _year: number | undefined;
  private _rating: number;
  private _status: string;
  private _airingDate: string;

  constructor({
    title,
    network,
    genre,
    year,
    rating,
    status,
    airingDate
  }: Show) {
    this._title = title;
    this._network = network;
    this._genre = genre;
    this._year = year;
    this._rating = rating;
    this._status = status;
    this._airingDate = airingDate;
  }

  // Getters and Setters for properties
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get network(): string | undefined {
    return this._network;
  }

  set network(value: string | undefined) {
    this._network = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get year(): number | undefined {
    return this._year;
  }

  set year(value: number | undefined) {
    this._year = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get airingDate(): string {
    return this._airingDate;
  }

  set airingDate(value: string) {
    this._airingDate = value;
  }
}
