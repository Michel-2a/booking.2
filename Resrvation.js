import React from "react";
import "../components/reservation.css";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation-right">
        <h3 className="h3">
          <i class="fa-solid fa-chevron-left"></i>Demande de reservation
        </h3>
        <input type="text" name="text" placeholder="Nom & Prenom" />
        <input type="text" name="text" placeholder="Email" />

        <div className="payement">
          <h3>Payer avec</h3>
          <div className="partie-card">
            <div className="payement-carte">
              <img
                src="https://particulier.groupebcp.com/fr/PublishingImages/GBP_Carte/carte-populaire.png"
                alt=""
              />
            </div>
            <div className="payement-carte">
              <img
                src="https://particulier.groupebcp.com/fr/PublishingImages/GBP_Carte/carte-populaire.png"
                alt=""
              />
            </div>
            <div className="payement-carte">
              <img
                src="https://particulier.groupebcp.com/fr/PublishingImages/GBP_Carte/carte-populaire.png"
                alt=""
              />
            </div>
            <div className="payement-carte">
              <img
                src="https://particulier.groupebcp.com/fr/PublishingImages/GBP_Carte/carte-populaire.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="moyen-paye">
          <input type="text" name="text" placeholder="Numero de carte" />
          <div className="moyen-code">
            <input type="text" name="text" placeholder="Expiration" />
            <input type="text" name="text" placeholder="Code" />
          </div>
        </div>
      </div>

      <div className="left">
        <div className="reservation-left">
          <div className="reservation-image">
            <img
              src="https://www.shutterstock.com/image-photo/living-room-couches-chairs-coffee-600nw-2290619915.jpg"
              alt="reserver"
            />
          </div>
          <div className="reservation-test">
            <p>Loyer</p>
            <p>3 500 dh</p>
          </div>
          <div className="reservation-test">
            <p>Garantie</p>
            <p>3 500 dh</p>
          </div>
          <div className="reservation-test">
            <p>Ménage</p>
            <p>500 dh </p>
          </div>
          <div className="reservation-test">
            <p>Frais de service Etando</p>
            <p>300 dh</p>
          </div>
          <button className="reservation-effet">Reserver</button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
