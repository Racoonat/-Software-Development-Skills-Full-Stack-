import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBook } from '../features/books/bookSlice'
import ReactStars from 'react-rating-stars-component'

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: 0,
    status: '',
    cover: '',
  })

  const { title, author, rating, status, cover } = formData

  const dispatch = useDispatch()

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

    dispatch(createBook(formData))
    setFormData({
      title: '',
      author: '',
      rating: 0,
      status: '',
      cover: '',
    })
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
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Book
          </button>
        </div>
      </form>
    </section>
  )
}

export default BookForm