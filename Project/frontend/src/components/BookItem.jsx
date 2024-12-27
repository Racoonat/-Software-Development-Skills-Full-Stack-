import { useDispatch } from 'react-redux'
import { deleteBook } from '../features/books/bookSlice'  // Asegúrate de tener la acción `deleteBook` en tu slice de libros

function BookItem({ book }) {
  const dispatch = useDispatch()

  return (
    <div className='book'>
      <h2>{book.title}</h2>  
      <p>Rating: {book.rating}</p> 
      <p>Status: {book.status}</p>  
      <button onClick={() => dispatch(deleteBook(book._id))} className='close'>
        X  
      </button>
    </div>
  )
}

export default BookItem