import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let accessToken = null;
let tokenExpiry = null;

async function refreshToken() {
  try {
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: 'client_credentials'
        }
      }
    );
    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000;
    return accessToken;
  } catch (error) {
    throw new Error('Failed to refresh IGDB token: ' + error.message);
  }
}

export async function searchGames(query) {
  if (!accessToken || Date.now() >= tokenExpiry) {
    await refreshToken();
  }

  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `fields id, name, cover.url, genres.name, first_release_date, summary; search "${query}"; limit 10;`,
      {
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      await refreshToken();
      return searchGames(query);
    }
    throw new Error('Failed to fetch from IGDB: ' + error.message);
  }
}
