// igdbClient.js
import fetch from 'node-fetch';

export async function fetchGames() {
  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.TWITCH_APP_ACCESS_TOKEN}`,
      'Accept': 'application/json'
    },
    body: 'fields name,cover.url,genres.name,first_release_date; limit 10;'
  });
  if (!response.ok) {
    throw new Error('Failed to fetch from IGDB');
  }
  return await response.json();
}
