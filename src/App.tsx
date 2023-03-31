import { useEffect, useState } from 'react';
import './App.css';
import {
  Button,
  Autocomplete,
  TextField,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Box
} from '@mui/material';
import { Show } from './models/Show';
import { loadShows } from './utils/loadShows';
import DeleteIcon from '@mui/icons-material/Delete';
import data from './data/tv_shows.json';
import { filterShowsByGenre } from './utils/filterByGenre';

const App = () => {
  const [shows, setShows] = useState<Show[] | undefined>();
  const [filteredShows, setFilteredShows] = useState<Show[] | undefined>();

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

  const renderedShows = filteredShows || shows;

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
          options={['test1, test2, test3']}
          sx={{ width: 300, height: 200 }}
          renderInput={params => <TextField {...params} label="Show" />}
        />

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
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{ width: 300 }}
                  key={item.title}
                >
                  <div>{item.title}</div>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Button variant="contained">Add Show</Button>
      </Box>
    </div>
  );
};

export default App;
