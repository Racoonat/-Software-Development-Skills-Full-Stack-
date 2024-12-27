function BookInfo({ book }) {
    return (
      <div className='book-info-popup'>
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <p><strong>Status:</strong> {book.status}</p>
        <p><strong>Description:</strong> {book.description}</p>
      </div>
    )
  }
  
  export default BookInfo