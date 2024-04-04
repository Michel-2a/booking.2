import React from "react";
import { Link } from "react-router-dom";
import "../components/profiil.css";

const Profiil = () => {
  return (
    <div className="box-profil">
      <div className="box-right">
        <h3> Votre Profil</h3>
        <div className="btn-profil">
          <img src="https://th.bing.com/th?id=OIP.GqGVPkLpUlSo5SmeDogUdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          <div className="btn-text">
            <h4> Michel Inapogui</h4>
            <Link to="mailto:inapoguim750@gmail.com" target="_blank">
              inapoguim750@gmail.com
            </Link>
            <p>Membre depuis 4ans</p>
          </div>
        </div>
      </div>

      <div className="box-left">
        <div className="btn-card">
          <input type="text" placeholder="Nom complet" required />
          <input type="text" placeholder="E-mail" required />
          <input type="text" placeholder="Ancien mot de passe" required />
          <input type="text" placeholder="Nouveau mot de passe" required />
          <i class="fa-solid fa-xmark"></i>
          <img src="https://th.bing.com/th?id=OIP.GqGVPkLpUlSo5SmeDogUdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          <button className="puce">Modifier</button>
        </div>
      </div>
    </div>
  );
};

export default Profiil;
