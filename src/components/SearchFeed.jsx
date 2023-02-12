import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos, Loader } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`search?q=${searchTerm}&part=snippet%2Cid&maxResults=50&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTerm]);

  if(!videos) return <Loader />

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
