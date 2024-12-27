const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')

// @desc    Get books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user.id })
  res.status(200).json(books)
})

// @desc    Set book
// @route   POST /api/books
// @access  Private
const setBook = asyncHandler(async (req, res) => {
  const { title, author, rating, status, cover } = req.body

  if (!title || !author || !rating || !status) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const book = await Book.create({
    title,
    author,
    rating,
    status,
    cover, // Asegúrate de que el campo cover se esté guardando
    user: req.user.id,
  })

  res.status(200).json(book)
})

// @desc    Update book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the book user
  if (book.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBook)
})

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the book user
  if (book.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
}