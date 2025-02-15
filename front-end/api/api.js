
import axios from "axios";

const URL = "https://jornada-full-stack-spotify.onrender.com/api" ;

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;


