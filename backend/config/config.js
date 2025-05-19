import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  twitchClientId: process.env.CLIENT_ID,
  twitchAccessToken: process.env.CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI
};