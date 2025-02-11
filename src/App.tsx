import { useEffect, useState } from 'react';
import './App.css';
import {
  Autocomplete,
  Button,
  TextField,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Box,
  Stack
} from '@mui/material';
import { Show } from './models/Show';
import { loadShows, ValidateSortingKeys } from './utils/loadShows';
import DeleteIcon from '@mui/icons-material/Delete';
import data from './data/tv_shows.json';
import { filterShowsByGenre } from './utils/filterByGenre';

const App = () => {
  const [shows, setShows] = useState<Show[] | undefined>();
  const [filteredShows, setFilteredShows] = useState<Show[] | undefined>();
  const [option, setOption] = useState<string>();
  const [order, setOrder] = useState<string>()

  useEffect(() => {
    const shows = loadShows(data);
    setShows(shows);
  }, []);




  const handleSetGenre = (genre: string) => {
    if(shows) {
      const array: Show[] = filterShowsByGenre(shows, genre);
      setFilteredShows(array);
    }
  }

  const handleSortShows = (e: React.MouseEvent) => {
    // loadShows(data, sortOption)
    e.preventDefault()

  }

  const renderedShows = filteredShows || shows;

  const sortOptions: ValidateSortingKeys[] = ["rating", "airingDate"] 

  const handleRemoveShow = (title: string) => {
    setShows(shows?.filter(show => show.title !== title))
  }

  return (
    <div className="App">
      <Typography sx={{ mt: 4, mb: 2, height: 200 }} variant="h3">
        TV Show Tracker
      </Typography>
      <Box
        sx={{
          mx: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={shows?.map(show => show.title) || []}
          sx={{ width: 300, height: 80 }}
          renderInput={params => <TextField {...params} label="Show" />}
        />
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Sort
        </Typography>
        <Stack direction={({ sm: "row" })}>
        <Autocomplete
          disablePortal
          id="sort-option"
          options={sortOptions.map(option => option) || []}
          sx={{ width: 150, height: 80, marginRight: 5 }}
          renderInput={params => <TextField {...params} label="Option" />}
        />
          <Autocomplete
          disablePortal
          id="sort-order"
          options={["ascending", "descending"] || []}
          sx={{ width: 150, height: 80 }}
          renderInput={params => <TextField {...params} label="Order" />}
        />
        </Stack>
        <Button onClick={(e: React.MouseEvent) => handleSortShows(e)}>Sort</Button>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 600
          }}
        >
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Shows
          </Typography>
          <div>
            <h2>Filter by genre</h2>
            {shows?.map(({genre}) => (
              <div onClick={() => handleSetGenre(genre)} style={{
                cursor: "pointer"
              }}>{genre}</div>
            ))}
          </div>
          <List dense={true}>
            {renderedShows?.map(item => {
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveShow(item.title)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                  key={item.title}
                >
                  <Stack spacing={2} direction={'row'}>
                    <div>{item.title}</div>
                    {item.genre && <div>{`Genre: ${item.genre}`}</div>}
                    {item.rating && <div>{`Rating: ${item.rating}`}</div>}
                    {item.status && <div>{`Status: ${item.status}`}</div>}
                    {item.airingDate && (
                      <div>{`Airing Date: ${item.airingDate}`}</div>
                    )}
                    {item.network && <div>{`Rating: ${item.network}`}</div>}
                    {item.year && <div>{`Year: ${item.year}`}</div>}
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
