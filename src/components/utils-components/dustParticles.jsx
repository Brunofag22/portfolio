import React from "react";
import ("./uCStyles/dustParticles.css")

const dustParticles = () => {
  return (
    <>
      <div id="nc-main" className="nc-main bg-cover bg-cc">
        <div className="full-wh">
          <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dustParticles;
