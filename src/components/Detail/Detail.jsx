import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import db from "../../firebase";
import play from "../../assets/images/play-icon-black.png";
import playWhite from "../../assets/images/play-icon-white.png";
import groupIcon from "../../assets/images/group-icon.png";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="detail-page" id="detail-page">
      <div className="background">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </div>

      <div className="image-title">
        <img src={detailData.titleImg} alt={detailData.title} />
      </div>

      <div className="content-meta">
        <div className="controls">
          <button className="player">
            <img src={play} alt="play" />
            <span>Play</span>
          </button>

          <button className="player">
            <img src={playWhite} alt="play" />
            <span>Trailer</span>
          </button>

          <div className="add-list">
            <span/>
            <span/>
          </div>

          <div className="group-watch"> 
            <div>
                <img src={groupIcon} alt="group" />
            </div>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="subtitle">
            {detailData.subTitle}
        </div>
        {/* -------------------------------- */}
        <div className="description">
            {detailData.description}
        </div>
      </div>
    </div>
  );
};

export default Detail;
