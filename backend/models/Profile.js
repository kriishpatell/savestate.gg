import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  username:    { type: String, required: true, unique: true, index: true },
  avatar_url:   String,
  bio:         String,
  followers:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  following:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  time_created:   { type: Date, default: Date.now }
});

export default mongoose.model('Profile', ProfileSchema);
