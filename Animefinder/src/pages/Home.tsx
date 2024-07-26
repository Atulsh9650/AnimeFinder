import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeAnime from '../components/HomeAnime'

const Home = () => {
  return (
    <Grid container>
    <Grid item xs={2}>
        <Sidebar />
   </Grid>
  <Grid item xs={10}>
       <HomeAnime />
  </Grid>
</Grid>
  )
}

export default Home