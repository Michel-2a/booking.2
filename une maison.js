import React from "react";
import "../components/navbar.css/pages.css";
import House from "./House";
import Caroussel from "../components/Caroussel";
import Cardhouse from "../components/Cardhouse";

const Pages = () => (
  <div className="content">
    <div className="contenter">
      <div className="nomber">
        <h2>Casablanca, Sidi Maârouf</h2>
        <div className="start">
          <i className="fa-solid fa-star"></i>
          <p>5,56</p>
        </div>
      </div>
      <p>3, lotissement siham la colline casablanca, Casablanca 20150</p>
      <div className="person-save">
        <div className="icon-text">
          <div className="person">
            <p>
              {" "}
              <i class="fa-solid fa-comment"></i> 15 commentaires
            </p>
          </div>
          <div className="person">
            <p>
              {" "}
              <i class="fa-solid fa-heart"></i> 7 favories
            </p>
          </div>
          <div className="person">
            <p>
              {" "}
              <i class="fa-sharp fa-solid fa-person"></i> Personnes
            </p>
          </div>
        </div>
        <div className="save">
          <i class="fa-sharp fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div className="images">
        <Caroussel />
      </div>

      <div className="card-boxe">
        <Cardhouse />
        <p className="dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="chambre">
        <div className="chambre-home">
          <i class="fa-sharp fa-solid fa-ruler-combined"></i>
          <p>35m²</p>
        </div>

        <div className="chambre-home">
          <i class="fa-sharp fa-solid fa-ruler-combined"></i>
          <p> 3 Chambres</p>
        </div>

        <div className="chambre-home1">
          <i class="fa-sharp fa-solid fa-ruler-combined"></i>
          <p>2 Etages</p>
        </div>
      </div>
      <div className="access">
        <h3>Ce que propose cette maison </h3>
        <div className="access-contenu">
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
          <div className="access-contenu1">
            {" "}
            <p>Fer à repasser</p>
          </div>
        </div>
      </div>

      <div className="contenu-commentaire">
        <h3>Espace Commentaire</h3>
        <div className="commentaire">
          <textarea
            rows={5}
            placeholder="votre commentaire ici"
            cols={80}
          ></textarea>
        </div>
        <div className="button-commentaire">
          <button className="btn">
            Envoyer<i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div />
      </div>

      <div className="messages">
        <div className="messages-profil">
          <div className="profile-content">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
              alt="Photo de profil de Michel Inapogui"
              className="photo"
            />
            <div className="messages-text">
              <h3>Michel Inapogui</h3>
              <p>22/02/2000</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="messages-profil">
          <div className="profile-content">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
              alt="Photo de profil de Michel Inapogui"
              className="photo"
            />
            <div className="messages-text">
              <h3>Michel Inapogui</h3>
              <p>22/02/2000</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="messages-profil">
          <div className="profile-content">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
              alt="Photo de profil de Michel Inapogui"
              className="photo"
            />
            <div className="messages-text">
              <h3>Michel Inapogui</h3>
              <p>22/02/2000</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="messages-profil">
          <div className="profile-content">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
              alt="Photo de profil de Michel Inapogui"
              className="photo"
            />
            <div className="messages-text">
              <h3>Michel Inapogui</h3>
              <p>22/02/2000</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <House />
  </div>
);

export default Pages;
