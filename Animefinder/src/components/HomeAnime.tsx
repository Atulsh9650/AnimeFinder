import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import AnimeItem from './AnimeItem';
import { useSearchParams } from 'react-router-dom';
import { fetchfailed, fetchstarted, fetchworked } from '../store/Animeslice';
import { fetchanimedetails } from '../utils/function';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';


const BigContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%', 
    gap: '10px',
    opacity: 0.8,
    padding: '10px',
    backgroundImage: "url('https://cdn.wallpapersafari.com/9/81/yaqGvs.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }));


const HomeAnime = () => {

    const dispatch=useDispatch();
    const params=useSearchParams()[0].get("genre");


    useEffect(()=>{
        dispatch(fetchstarted());
        fetchanimedetails(params)
        .then((data)=>dispatch(fetchworked(data)))
        .catch((error)=>dispatch(fetchfailed(error)))
    },[params])

    const {anime,loading,error}=useSelector((state:{anime:Statetype})=>state.anime);


  return (
    <BigContainer>
    {loading ? (
      <Loader />
    ) : (
      anime.map((item, idx) => (
        <AnimeItem key={idx} item={item} />
      ))
    )}
    {error && <div>Error: {error}</div>}
  </BigContainer>
  )
}

export default HomeAnime