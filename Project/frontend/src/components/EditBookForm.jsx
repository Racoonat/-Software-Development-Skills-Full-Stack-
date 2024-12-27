import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateBook } from '../features/books/bookSlice'

function EditBookForm({ book, onCancel }) {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    rating: book.rating,
    status: book.status,
    cover: book.cover,
  })

  const { title, author, rating, status, cover } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateBook({ id: book._id, ...formData }))
    onCancel()
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
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
          <label htmlFor='rating'>Rating</label>
          <input
            type='number'
            name='rating'
            id='rating'
            value={rating}
            onChange={onChange}
            min='1'
            max='5'
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
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Update Book
          </button>
          <button className='btn btn-block' type='button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditBookForm