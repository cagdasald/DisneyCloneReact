import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { selectRecommend } from '../../../Features/Movie/movieSlice';
import './Recommends.scss';

const Recommends = () => {
    const movies = useSelector(selectRecommend);
    console.log(movies, ":🛢️");

  return (
    <div className='recommends'>
        <h4>Recommended for You</h4>
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

export default Recommends