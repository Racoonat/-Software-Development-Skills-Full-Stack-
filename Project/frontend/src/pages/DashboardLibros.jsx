import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBooks, reset } from '../features/books/bookSlice';
import Spinner from '../components/Spinner';
import BookItem from '../components/BookItem';
import BookForm from '../components/BookForm';

const DashboardLibros = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(getBooks());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Bookshelf</p>
      </section>

      <BookForm />

      <section className='content'>
        
        {books.length > 0 ? (
          <div className='books'>
            {books.map((book) => (
              <BookItem key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <h3>You have not shelved any book yet</h3>
        )}
      </section>
    </>
  );
};

export default DashboardLibros;
