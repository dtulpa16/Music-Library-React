import axios from "axios";
import { Song } from "../types";

export const fetchSongs = async (): Promise<Song[]> => {
  const response = await axios.get("https://localhost:7010/api/Songs")
  if(response.status !== 200){
    const error = new Error("An error occurred while fetching songs")
    error.message = response.statusText
    throw error
  }
  const data = response.data
  return data
};
