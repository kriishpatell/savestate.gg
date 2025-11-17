import mongoose from 'mongoose';

const ListItemSchema = new mongoose.Schema(
  {
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    note: { type: String, maxlength: 2000 },
    rank: { type: Number, min: 1 },
    addedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const ListSchema = new mongoose.Schema(
  {
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, maxlength: 5000 },
    visibility: { type: String, enum: ['public', 'unlisted', 'private'], default: 'public' },
    coverImageUrl: String,
    tags: [{ type: String, trim: true }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    items: { type: [ListItemSchema], default: [] }
  },
  { timestamps: true }
);

ListSchema.index({ profile: 1, title: 1 }, { unique: true });

export default mongoose.model('List', ListSchema);

