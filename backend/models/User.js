import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', unique: true },
    time_created: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema); 

