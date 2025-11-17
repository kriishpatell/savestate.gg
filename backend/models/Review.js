import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
  {
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    userGame: { type: mongoose.Schema.Types.ObjectId, ref: 'UserGame' },
    title: { type: String, trim: true, maxlength: 200 },
    body: { type: String, required: true },
    rating: { type: Number, min: 0, max: 10 },
    spoilerTags: [{ type: String }],
    isDraft: { type: Boolean, default: false },
    publishedAt: Date,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    commentsCount: { type: Number, default: 0, min: 0 }
  },
  { timestamps: true }
);

ReviewSchema.index({ profile: 1, game: 1 }, { unique: true });
ReviewSchema.index({ publishedAt: 1 });

export default mongoose.model('Review', ReviewSchema);

