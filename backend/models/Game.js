import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema(
  {
    igdbId: { type: Number, required: true, unique: true, index: true },
    slug: { type: String, index: true },
    name: { type: String, required: true, trim: true },
    summary: String,
    coverUrl: String,
    genres: [{ type: String }],
    platforms: [{ type: String }],
    firstReleaseDate: Date,
    targetRatingScale: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 10 }
    },
    averageRating: { type: Number, min: 0, max: 10, default: 0 },
    ratingCount: { type: Number, min: 0, default: 0 },
    aggregatedRating: { type: Number, min: 0, max: 100 },
    dlcCount: { type: Number, min: 0, default: 0 },
    lastSyncedAt: Date,
    extra: mongoose.Schema.Types.Mixed
  },
  { timestamps: true }
);

export default mongoose.model('Game', GameSchema);

