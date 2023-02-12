import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { Typography, Box,Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos, Loader} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Link } from 'react-router-dom';


const VideoDetail = () => {
  const {id} = useParams();

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() =>{

    fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`).then((data) => setVideos(data.items))
  
  }, [id])

  if(!videoDetail?.snippet) return <Loader />

 
  const{snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;

  return(
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position:'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player"/>
              <Typography color='#fff' variant='h5' fontWeight='bold'>
                {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{
                color:'#fff'}} py={1} px={2}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                    {channelTitle}
                    <CheckCircle  sx={{fontSize: '12px', color: 'gray', ml:'5px'}}/>
                    </Typography>
                  </Link>
                  <Stack direction='row' gap='20px' alignItems='center'> 
                    <Typography variant='body1' sx={{opacity: 0.7}}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography>
                    {parseInt(likeCount).toLocaleString()} views
                    </Typography>
                  </Stack>
              </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
                <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail