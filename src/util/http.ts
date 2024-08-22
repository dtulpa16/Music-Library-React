import axios from "axios";
import { Song } from "./types";

import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const fetchSongs = async (): Promise<Song[]> => {
  const userId = localStorage.getItem("userId");

  const headers = userId ? { "User-Id": userId } : undefined;

  const response = await axios.get(
    `${process.env.BASE_URL}/api/Songs`,
    {
      headers: headers,
    }
  );

  if (response.status !== 200) {
    const error = new Error("An error occurred while fetching songs");
    error.message = response.statusText;
    throw error;
  }
  const data = response.data;
  return data;
};

export const addSong = async (data: Song): Promise<Song | null> => {
  try {
    const response = await axios.post<Song>(
      `${process.env.BASE_URL}/api/Songs`,
      data
    );

    // return the response data
    return response.data;
  } catch (error) {
    console.error("Error adding song:", error);
    return null;
  }
};

export const handleFavorite = async (songId: number): Promise<Song | null> => {
  const userId = localStorage.getItem("userId");

  const headers = userId ? { "User-Id": userId } : undefined;
  const response = await axios.post(
    `https://music-library-api-buhfd2cvefbxedbg.eastus-01.azurewebsites.net/api/playlists/addSong`,
    { songId, userId },
    { headers: headers }
  );

  if (response.status !== 200) {
    const error = new Error("An error occurred while fetching songs");
    error.message = response.statusText;
    throw error;
  }
  const data = response.data;
  return data;
};
