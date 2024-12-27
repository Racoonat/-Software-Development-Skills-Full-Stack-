import axios from 'axios'

const API_URL = '/api/books/'

// Create new book
const createBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bookData, config)

  return response.data
}

// Get user books
const getBooks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user book
const deleteBook = async (bookId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + bookId, config)

  return response.data
}

// Update user book
const updateBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + bookData.id, bookData, config)

  return response.data
}

const bookService = {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
}

export default bookService