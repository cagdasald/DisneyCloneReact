import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import home from "../../assets/images/home-icon.svg";
import movie from "../../assets/images/movie-icon.svg";
import watchlist from "../../assets/images/watchlist-icon.svg";
import search from "../../assets/images/search-icon.svg";
import series from "../../assets/images/series-icon.svg";
import original from "../../assets/images/original-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from "../Features/User/userSlice";
import { useEffect } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user)
        history.push('/home')
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  console.log(userPhoto)

  return (
    <nav className="header" id="header">
      <a href="./" className="logo-wrapper">
        <img className="logo" src={logo} alt="disney-logo" />
      </a>

      {!userName ? (
        <button onClick={handleAuth} className="login-btn">
          Login
        </button>
      ) : (
        <React.Fragment>
          <div className="nav-menu">
            <ul className="menu">
              <li className="menu-item">
                <img src={home} alt="home" />
                <a className="item-title" href="./home">
                  Home
                </a>
              </li>

              <li className="menu-item">
                <img src={search} alt="home" />
                <a className="item-title" href="./">
                  Search
                </a>
              </li>

              <li className="menu-item">
                <img src={watchlist} alt="home" />
                <a className="item-title" href="./">
                  Watchlist
                </a>
              </li>

              <li className="menu-item">
                <img src={original} alt="home" />
                <a className="item-title" href="./">
                  Originals
                </a>
              </li>

              <li className="menu-item">
                <img src={movie} alt="home" />
                <a className="item-title" href="./">
                  Movies
                </a>
              </li>

              <li className="menu-item">
                <img src={series} alt="home" />
                <a className="item-title" href="./">
                  Series
                </a>
              </li>
            </ul>
          </div>
          <div className="sign-out">
            <img className="user-img" src={userPhoto} alt={userName} />
             <span onClick={handleAuth} className="dropdown">Sign Out</span>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Header;
