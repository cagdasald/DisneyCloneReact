import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { selectOriginal } from '../../../Features/Movie/movieSlice';
import './Originals.scss';

const Originals = () => {
    const movies = useSelector(selectOriginal);

  return (
    <div className='recommends'>
        <h4>Originals</h4>
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

export default Originals