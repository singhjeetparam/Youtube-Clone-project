import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle, MenuOpen } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const PlaylistCard = ({
  video: {
    id: { playlistId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100px" },
        boxShadow: "none",
        borderRadius: "none",
        position: 'relative'
      }}
    >
      <Link to={playlistId ? `/video/${playlistId}` : demoVideoUrl}>
        
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        />
        <Box
          sx={{
            width: { md: "160px", xs: "100px" },
            height: "180px",
            backgroundColor: "#000",
            opacity: "0.5",
            position: "absolute",
            top: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MenuOpen sx={{fontSize: 50, color: '#fff'}} />
          </Box>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
        <Link to={playlistId ? `/video/${playlistId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channedId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color="gray"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Playlist
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
