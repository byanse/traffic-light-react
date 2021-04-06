import React from "react";
import { useState } from "react";
import './Semaforo.css';



function Semaforo() {
  const [colorSeleccionadoRojo, setColorSeleccionadoRojo] = useState("");
  const [colorSeleccionadoAmarillo, setColorSeleccionadoAmarillo] = useState("");
  const [colorSeleccionadoVerde, setColorSeleccionadoVerde] = useState("");

  function setColorSelecccionado(e) {
    if (e.target.classList.contains("rojo")) {
      setColorSeleccionadoRojo("selected");
      setColorSeleccionadoAmarillo("");
      setColorSeleccionadoVerde("");
    }

    if (e.target.classList.contains("amarillo")) {
      setColorSeleccionadoRojo("");
      setColorSeleccionadoAmarillo("selected");
      setColorSeleccionadoVerde("");
    }

    if (e.target.classList.contains("verde")) {
      setColorSeleccionadoRojo("");
      setColorSeleccionadoAmarillo("");
      setColorSeleccionadoVerde("selected");
    }
  }

  return (
    <div className="caja">
      <div className={"rojo circulo " + colorSeleccionadoRojo} onClick={setColorSelecccionado}></div>
      <div className={"amarillo circulo " + colorSeleccionadoAmarillo} onClick={setColorSelecccionado}></div>
      <div className={"verde circulo " + colorSeleccionadoVerde} onClick={setColorSelecccionado}></div>
    </div>

  );
}


export default Semaforo