import axios from "axios";
const baseURL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    headers: {
    //API 1 
    "X-RapidAPI-Key": "d83895413amsh0d053cfa54a14e0p10b92cjsnf6c9002a5090",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   
    }
  };

  export const fetchFromAPI  = async(url) =>{
        const {data} = await axios.get(`${baseURL}/${url}`, options)
        return data;
  }

