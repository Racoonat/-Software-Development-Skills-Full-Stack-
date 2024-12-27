import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../features/auth/authSlice'

function Profile() {
  const { user } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture || '',
  })
  const [isEditing, setIsEditing] = useState(false)

  const { name, email, profilePicture } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProfile(formData))
    setIsEditing(false)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <div className='profile'>
      <div className='profile-header'>
        <button className='btn edit-btn' onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>
      <div className='profile-content'>
        <div className='profile-picture'>
          <img src={profilePicture} alt='Profile' />
        </div>
        <div className='profile-details'>
          {isEditing ? (
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='profilePicture'>Profile Picture URL</label>
                <input
                  type='text'
                  name='profilePicture'
                  id='profilePicture'
                  value={profilePicture}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                  Save
                </button>
                <button className='btn btn-block' type='button' onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile