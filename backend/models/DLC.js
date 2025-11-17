import mongoose from 'mongoose';

const DLCSchema = new mongoose.Schema(
  {
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true, index: true },
    igdbId: { type: Number, required: true, unique: true },
    slug: { type: String, index: true },
    title: { type: String, required: true, trim: true },
    description: String,
    coverUrl: String,
    platforms: [{ type: String }],
    releaseDate: Date,
    averageRating: { type: Number, min: 0, max: 10 },
    ratingCount: { type: Number, min: 0, default: 0 },
    extra: mongoose.Schema.Types.Mixed
  },
  { timestamps: true }
);

DLCSchema.index({ game: 1, releaseDate: -1 });

export default mongoose.model('DLC', DLCSchema);

