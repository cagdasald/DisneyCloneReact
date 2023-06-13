import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { selectNewDisney } from '../../../Features/Movie/movieSlice';
import './NewDisney.scss';

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);

  return (
    <div className='recommends'>
        <h4>New to Disney+</h4>
        <div className='contents'>
        {movies &&
          movies.map((movie, key) => (
            <div className='wrap' key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default NewDisney