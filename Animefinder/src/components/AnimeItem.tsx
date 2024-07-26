import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';

const AnimeContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
  },
}));

type propstype={
    item:Animetype;
}

const AnimeItem = ({item}:propstype) => {
  return (
    <Paper 
      elevation={3} 
      sx={{
        width: '100%',
        minWidth: 500,
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box sx={{ height: '100%', overflow: 'hidden' }}>
            <img
              src={item.image}
              alt="anime"
              style={{ height:'400px',width: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <AnimeContainer>
            <Typography variant="h4" textAlign="center">
              {item.title}
            </Typography>
            <Box sx={{width: '100%' }}>
              <Typography variant="body2" fontWeight="bold">
                Episode: {item.episodes}
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                Status: {item.status}
              </Typography>
              <Typography variant="body2">
                More Details: <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>MyAnimeList/{item.title}</a>
              </Typography>
              <Typography variant="body2">Ranking: {item.ranking}</Typography>
              <Typography variant="body2">Genres: {item.genres.map((genre) => genre).join(', ')}</Typography>
              </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Summary: {item.synopsis}  
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 ,fontWeight:"bold"}}>
              Type: {item.type}
            </Typography>
          </AnimeContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AnimeItem;
