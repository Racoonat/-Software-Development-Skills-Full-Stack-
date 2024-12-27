import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../features/books/bookSlice'
import EditBookForm from './EditBookForm'
import placeholderImage from '../assets/placeholder.png'
import ReactStars from 'react-rating-stars-component'
import BookInfoPopup from './BookInfoPopup'

function BookItem({ book }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
    setIsPopupOpen(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  const handleBookClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className={`book ${isPopupOpen ? 'popup-open' : ''}`}>
      {isEditing ? (
        <EditBookForm book={book} onCancel={handleCancelEdit} />
      ) : (
        <>
          <div className='book-content' onClick={handleBookClick}>
            <img src={book.cover || placeholderImage} alt={book.title} className='book-cover' />
            <div className='book-info'>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>Status: {book.status}</p>
              {book.status === 'read' && (
                <div className='rating-container'>
                  <ReactStars
                    count={5}
                    value={book.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              )}
            </div>
          </div>
          {isPopupOpen && (
            <>
              <button onClick={() => dispatch(deleteBook(book._id))} className='close'>
                X
              </button>
              <button onClick={handleEditClick} className='edit'>
                Edit
              </button>
            </>
          )}
        </>
      )}
      {isPopupOpen && <BookInfoPopup book={book} onClose={handleClosePopup} onEdit={handleEditClick} />}
    </div>
  )
}

export default BookItem