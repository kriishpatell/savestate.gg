import mongoose from 'mongoose';

const STATUSES = ['Plan to Play', 'Playing', 'Completed', 'Abandoned', 'On Hold', 'Not Started'];

const UserGameSchema = new mongoose.Schema(
  {
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    igdb_game_id: { type: Number, required: true },
    status: {
      type: String,
      enum: STATUSES,
      default: 'Not Started'
    },
    playTimeMinutes: { type: Number, min: 0, default: 0 },
    completionPercentage: { type: Number, min: 0, max: 100 },
    rating: { type: Number, min: 0, max: 10 },
    notes: { type: String, maxlength: 5000 },
    startedAt: Date,
    completedAt: Date,
    metadata: {
      platform: String,
      ownership: { type: String, enum: ['Physical', 'Digital', 'Subscription', 'Other'] },
      isFavorite: { type: Boolean, default: false }
    }
  },
  {
    timestamps: true
  }
);

UserGameSchema.index({ profile: 1, game: 1 }, { unique: true });
UserGameSchema.index({ profile: 1, status: 1 });
UserGameSchema.index({ igdb_game_id: 1 });

export default mongoose.model('UserGame', UserGameSchema);
