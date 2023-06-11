import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import home from "../../assets/images/home-icon.svg";
import movie from "../../assets/images/movie-icon.svg";
import watchlist from "../../assets/images/watchlist-icon.svg";
import search from "../../assets/images/search-icon.svg";
import series from "../../assets/images/series-icon.svg";
import original from "../../assets/images/original-icon.svg";

const Header = () => {
  return (
    <nav className="header" id="header">
      <a href="./" className="logo-wrapper">
        <img className="logo" src={logo} alt="disney-logo" />
      </a>
      <div className="nav-menu">
        <ul className="menu">
          <li className="menu-item">
            <img src={home} alt="home" />
            <a className="item-title" href="./">Home</a>
          </li>

          <li className="menu-item">
            <img src={search} alt="home" />
            <a className="item-title" href="./">Search</a>
          </li>

          <li className="menu-item">
            <img src={watchlist} alt="home" />
            <a className="item-title" href="./">Watchlist</a>
          </li>

          <li className="menu-item">
            <img src={original} alt="home" />
            <a className="item-title" href="./">Originals</a>
          </li>

          <li className="menu-item">
            <img src={movie} alt="home" />
            <a className="item-title" href="./">Movies</a>
          </li>

          <li className="menu-item">
            <img src={series} alt="home" />
            <a className="item-title" href="./">Series</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
