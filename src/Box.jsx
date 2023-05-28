import React from "react";
import "./App.css";
import Cruffins from "./assets/img/comida2.jpeg";
import Cheesecake from "./assets/img/comida3.jpeg";

const Box = () => {
  return (
    <div className="container">
      <div className="box">
        <img className="image" src={Cruffins} alt="Imagen 1" />
        <div className="text">
          <p>Chocolate</p>
        </div>
      </div>
      <div className="box">
        <img className="image" src={Cruffins} alt="Imagen 2" />
        <div className="text">
          <p>Cheescake</p>
        </div>
      </div>
      <div className="box">
        <img className="image" src={Cheesecake} alt="Imagen 3" />
        <div className="text">Texto de la caja 3</div>
      </div>
    </div>
  );
};

export default Box;
