import React from "react";
import("../styles/prueba.css");
import BoxImg from "../styles/box.png";
import DustParticles from "./utils-components/dustParticles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function turnOff() {
  let lightOff = document.getElementById("light");
  lightOff.classList.remove("light");
}

function turnOn() {
  let lightOn = document.getElementById("light");
  lightOn.classList.add("light");
}

function turnOffDust() {
  let dust = document.getElementById("dust");
  dust.classList.add("dustParticles");
}

function turnOnDust() {
  let dust = document.getElementById("dust");
  dust.classList.remove("dustParticles");
}

const MainCorridor = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [dustSelect, setDustSelect] = useState("");
  const [lightsSelect, setLightsSelect] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>

    <nav>
      <div className="navContainer">
        <h1>Bruno Alvez</h1>
      </div>
    </nav>

      <div className="container">
        <div className="muro">
          <Link to="/Pasillo2">
            <div className="see__More"></div>
          </Link>
          <img className="box" src={BoxImg} />
          <div id="light" className="light"></div>
          <div className="wall1">
            <div className="config" onClick={openModal}></div>
            <Modal
              isOpen={modalIsOpen}
              ariaHideApp={false}
              onRequestClose={closeModal}
              className="modal"
              overlayClassName="Overlay"
            >
              <button onClick={closeModal} className="btn__Modal--close">
                X
              </button>
              <h3 className="config__Tittle">Config</h3>
              <div className="configParametros">
                <label>Dust particles :</label>
                <select value={dustSelect} onChange={(e) => setDustSelect(e.target.value)}>
                  <option onClick={turnOnDust}>On</option>
                  <option onClick={turnOffDust}>Off</option>
                </select>
                <label>Lights :</label>
                <select value={lightsSelect} onChange={(e) => setLightsSelect(e.target.value)}>
                  <option onClick={turnOn}>On</option>
                  <option onClick={turnOff}>Off</option>
                </select>
                <button>Save Changes</button>
              </div>
            </Modal>
          </div>
          <div className="wallBack">
            <div id="dust">
              <DustParticles />
            </div>
          </div>
          <div className="floor"></div>
          <div className="sky"></div>
          <div className="wall2"></div>
        </div>
      </div>
    </div>
  );
};

export default MainCorridor;
