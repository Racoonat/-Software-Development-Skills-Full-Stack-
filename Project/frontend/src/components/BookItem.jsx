import { useDispatch } from 'react-redux'
import { deleteBook } from '../features/books/bookSlice'

function BookItem({ book }) {
  const dispatch = useDispatch()

  return (
    <div className='book'>
      {book.cover && <img src={book.cover} alt={book.title} className='book-cover' />}
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>Status: {book.status}</p>
      <button onClick={() => dispatch(deleteBook(book._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BookItem