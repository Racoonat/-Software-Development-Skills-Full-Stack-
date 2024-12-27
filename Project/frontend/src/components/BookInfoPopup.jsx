import React from 'react'
import ReactStars from 'react-rating-stars-component'
import placeholderImage from '../assets/placeholder.png'

function BookInfoPopup({ book, onClose }) {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('popup')) {
      onClose()
    }
  }

  return (
    <div className='popup' onClick={handleClickOutside}>
      <div className='popup-inner'>
        <button className='close-btn' onClick={onClose}>X</button>
        <div className='book-info'>
          <img src={book.cover || placeholderImage} alt={book.title} className='book-cover' />
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
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
          <p><strong>Status:</strong> {book.status}</p>
          <p><strong>Description:</strong> {book.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BookInfoPopup