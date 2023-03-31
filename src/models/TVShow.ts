export class TVShow {
    private _title: string;
    private _network: string;
    private _genre: string;
    private _year: number;
    private _rating: number;
    private _status: string;
  
    constructor(title: string, network: string, genre: string, year: number, rating: number, status: string) {
      this._title = title;
      this._network = network;
      this._genre = genre;
      this._year = year;
      this._rating = rating;
      this._status = status;
    }
  
    // Getters and Setters for properties
    get title(): string {
      return this._title;
    }
  
    set title(value: string) {
      this._title = value;
    }
  
    get network(): string {
      return this._network;
    }
  
    set network(value: string) {
      this._network = value;
    }
  
    get genre(): string {
      return this._genre;
    }
  
    set genre(value: string) {
      this._genre = value;
    }
  
    get year(): number {
      return this._year;
    }
  
    set year(value: number) {
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
  }
  