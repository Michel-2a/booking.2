import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <Link to={"/single"}>
      <div className="card1">
        <div className="card-images">
          <img src="https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_640.jpg" />
          <i className="fas fa-heart heart-icon"></i>
        </div>

        <div className="texte">
          <h3>Casablanca, Ain Sebâa</h3>
          <p>
            {" "}
            <i class="fa-sharp fa-solid fa-person"></i>1/2 (people)
          </p>
        </div>
        <div className="nomber">
          <p>2 000 DH</p>
          <div className="start">
            <i class="fa-solid fa-star"></i>
            <p> 5,45 </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
