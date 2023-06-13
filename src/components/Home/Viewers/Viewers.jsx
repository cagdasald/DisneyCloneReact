import React from "react";
import disney from "../../../assets/images/viewers-disney.png";
import pixar from "../../../assets/images/viewers-pixar.png";
import marvel from "../../../assets/images/viewers-marvel.png";
import starwars from "../../../assets/images/viewers-starwars.png";
import national from "../../../assets/images/viewers-national.png";
import constants from "../../../App/constants";
import "./Viewers.scss"


const Viewers = () => {
  return (
    <div className="viewers">
      <div className="wrap">
        <img src={disney} alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={constants.videoDisney} type="video/mp4" />
        </video>
      </div>

      <div className="wrap">
        <img src={pixar} alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={constants.videoPixar} type="video/mp4" />
        </video>
      </div>

      <div className="wrap">
        <img src={marvel} alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={constants.videoMarvel} type="video/mp4" />
        </video>
      </div>

      <div className="wrap">
        <img src={starwars} alt="star wars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={constants.videoStarWars} type="video/mp4" />
        </video>
      </div>

      <div className="wrap">
        <img src={national} alt="national" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={constants.videoNatGeo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
