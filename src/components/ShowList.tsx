import React from "react";

interface Show {
  title: string;
  genre: string;
  rating: number;
  status: string;
  airingDate: string;
}

interface IShowList {
  shows: Show[];
}

const ShowList: React.FC<IShowList> = ({ shows }) => {
  return (
    <div>
      {shows.map(({title, genre, rating, status, airingDate}) => (
        <div key={title}>
          <h2>{title}</h2>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Airing Date:</strong> {airingDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
