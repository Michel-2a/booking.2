import React from "react";

const House = () => {
  return (
    <div className="card-fixe">
      <div className="test">
        <p> 3 500dh</p>
        <p>/Mois </p>
      </div>
      <div>
        <hr />
      </div>
      <p>
        Depuis notre grand balcon, vous pourrez profiter d'une vue unique sur la
        mer et les fontaines magiques.
      </p>
      <div className="test">
        <p>Loyer</p>
        <p>3 500 dh</p>
      </div>
      <div className="test">
        <p>Garantie</p>
        <p>3 500 dh</p>
      </div>
      <div className="test">
        <p>Ménage</p>
        <p>500 dh </p>
      </div>
      <div className="test">
        <p>Frais de service Etando</p>
        <p>300 dh</p>
      </div>
      <button className="effet">Reserver</button>
    </div>
  );
};

export default House;
