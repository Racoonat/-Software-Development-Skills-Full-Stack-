const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    author: {
      type: String,
      required: [true, 'Please add an author'],
    },
    rating: {
      type: Number,
      required: false,
      min: 1,
      max: 5,
    },
    status: {
      type: String,
      required: [true, 'Please add a status'],
      enum: ['read', 'TBR', 'reading'],
    },
    cover: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Book', bookSchema)