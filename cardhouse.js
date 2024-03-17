import React from "react";
import "../components/cardhouse/cardhouse.css";

const Cardhouse = () => {
  return (
    <div className="profilee-cardd" style={{ marginTop: "10px" }}>
      <div className="Profil">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
          alt="Photo de profil de Michel Inapogui"
          className="profilee"
        />
        <div className="text12">
          <h3>Michel Inapogui</h3>
          <p>Lorem, ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="button">
        <button>connecter</button>
      </div>
    </div>
  );
};

export default Cardhouse;
