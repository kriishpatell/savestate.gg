import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  twitchClientId: process.env.TWITCH_CLIENT_ID,
  twitchAccessToken: process.env.TWITCH_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI
};