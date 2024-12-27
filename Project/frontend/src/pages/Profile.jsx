import { useSelector } from 'react-redux'

function Profile() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className='profile'>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  )
}

export default Profile