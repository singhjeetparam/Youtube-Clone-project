import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import{ Videos, ChannelCard, Loader } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const[channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`).then((data) => setVideos(data?.items))

  }, [id])

  if(!channelDetail) return <Loader />

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', zIndex: 10, height: '300px'}}
        />
            <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>
      <Box display="flex" p="2">
        <Videos videos={videos} />
      
      </Box>
     

    </Box>
  );
}

export default ChannelDetail