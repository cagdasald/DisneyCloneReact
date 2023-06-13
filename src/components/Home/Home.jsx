/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import "./Home.scss";
import ImageSlider from './Slider/ImageSlider';
import Viewers from './Viewers/Viewers';
import Recommends from './Recommends/Recommends';
import NewDisney from './NewDisney/NewDisney';
import Originals from './Originals/Originals';
import Trending from './Trending/Trending';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from "../../Features/Movie/movieSlice";
import { selectUserName } from "../../Features/User/userSlice";
import { useEffect } from 'react';
import db from "../../firebase"

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot.docs.map((doc) => {
        console.log(recommends);
        // eslint-disable-next-line default-case
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div className='page' id='home-page'>
      <ImageSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </div>
  )
}

export default Home