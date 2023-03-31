interface Show {
    title: string;
    genre: string;
    rating: number;
    status: string;
    airingDate: string;
  }
  
  export function filterShowsByGenre(shows: Show[], genre: string): Show[] {
    return shows.filter((show) => show.genre === genre);
  }
  