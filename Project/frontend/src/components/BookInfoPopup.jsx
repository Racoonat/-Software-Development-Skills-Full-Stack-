import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import placeholderImage from '../assets/placeholder.png'
import { useDispatch } from 'react-redux'
import { updateBook, deleteBook } from '../features/books/bookSlice'

function BookInfoPopup({ book, onClose }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    rating: book.rating,
    status: book.status,
    cover: book.cover,
  })

  const { title, author, rating, status, cover } = formData
  const dispatch = useDispatch()

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onRatingChange = (newRating) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: newRating,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBook({ id: book._id, ...formData }))
    setIsEditing(false)
  }

  const handleDelete = () => {
    dispatch(deleteBook(book._id))
    onClose()
  }

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('popup')) {
      onClose()
    }
  }

  return (
    <div className='popup' onClick={handleClickOutside}>
      <div className='popup-inner'>
        <button className='close-btn' onClick={onClose}>X</button>
        {isEditing ? (
          <form onSubmit={onSubmit}>
            <div className='popup-content'>
              <div className='popup-left'>
                <img src={cover || placeholderImage} alt={title} className='popup-book-cover' />
              </div>
              <div className='popup-right'>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='author'>Author</label>
                  <input
                    type='text'
                    name='author'
                    id='author'
                    value={author}
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='status'>Status</label>
                  <select
                    name='status'
                    id='status'
                    value={status}
                    onChange={onChange}
                  >
                    <option value=''>Select Status</option>
                    <option value='read'>Read</option>
                    <option value='TBR'>TBR</option>
                    <option value='reading'>Reading</option>
                  </select>
                </div>
                {status === 'read' && (
                  <div className='form-group'>
                    <label htmlFor='rating'>Rating</label>
                    <ReactStars
                      count={5}
                      value={rating}
                      size={24}
                      activeColor="#ffd700"
                      onChange={onRatingChange}
                    />
                  </div>
                )}
                <div className='form-group'>
                  <label htmlFor='cover'>Cover URL</label>
                  <input
                    type='text'
                    name='cover'
                    id='cover'
                    value={cover}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className='form-group buttons'>
              <button className='btn btn-block' type='submit'>
                Save
              </button>
              <button className='btn btn-block' type='button' onClick={handleCancelEdit}>
                Cancel
              </button>
              <button className='btn btn-block btn-danger' type='button' onClick={handleDelete}>
                Delete
              </button>
            </div>
          </form>
        ) : (
          <div className='popup-content'>
            <div className='popup-left'>
              <img src={book.cover || placeholderImage} alt={book.title} className='popup-book-cover' />
            </div>
            <div className='popup-right'>
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              {book.status === 'read' && (
                <div className='rating-container-popup'>
                  <ReactStars
                    count={5}
                    value={book.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              )}
              <p><strong>Status:</strong> {book.status}</p>
            </div>
          </div>
        )}
        {!isEditing && <button className='edit-btn' onClick={handleEditClick}>Edit Book</button>}
      </div>
    </div>
  )
}

export default BookInfoPopup