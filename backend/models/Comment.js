import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    body: { type: String, required: true, maxlength: 2000 },
    targetModel: {
      type: String,
      required: true,
      enum: ['Review', 'List', 'UserGame']
    },
    target: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'targetModel'
    },
    parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

CommentSchema.index({ targetModel: 1, target: 1, createdAt: -1 });
CommentSchema.index({ parentComment: 1 });

export default mongoose.model('Comment', CommentSchema);

