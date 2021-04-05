import React from "react";
import './Semaforo.css';

export default class Semaforo extends React.Component {
  constructor() {
    super();
    this.state = {
      clickColor: null
    };
  }

  render() {
    console.log(this.state);

    let rojoClassAditional = "";
    if (this.state.clickColor === "rojo") rojoClassAditional = "selected";

    let amarilloClassAditional = "";
    if (this.state.clickColor === "amarillo") amarilloClassAditional = "selected";

    let verdeClassAditional = "";
    if (this.state.clickColor === "verde") verdeClassAditional = "selected";

    return <div className="caja">
      <div className={"rojo circulo " + rojoClassAditional} onClick={() => this.setState({ clickColor: "rojo" })}></div>
      <div className={"amarillo circulo " + amarilloClassAditional} onClick={() => this.setState({ clickColor: "amarillo" })}></div>
      <div className={"verde circulo " + verdeClassAditional} onClick={() => this.setState({ clickColor: "verde" })}></div>
    </div>;

  }
}
