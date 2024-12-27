import { useDispatch } from 'react-redux'
import { deleteBook } from '../features/books/bookSlice'
import placeholderImage from '../assets/placeholder.png' 

function BookItem({ book }) {
  const dispatch = useDispatch()

  return (
    <div className='book'>
      <div className='book-content'>
        <img src={book.cover || placeholderImage} alt={book.title} className='book-cover' />
        <div className='book-info'>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>Rating: {book.rating}</p>
          <p>Status: {book.status}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteBook(book._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BookItem