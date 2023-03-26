import { useState } from "react";
import Slider from "../Slider";

import "./Box.css";

const Box = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="box">
      <h1>Mixér Barev</h1>
      <div className="slider_container">
        <p>Červená</p>
        <Slider color="red" setColor={setRed} value={red} />
        <p>Zelená</p>
        <Slider color="green" setColor={setGreen} value={green} />
        <p>Modrá</p>
        <Slider color="blue" setColor={setBlue} value={blue} />
      </div>
      sz
      <span
        className="dot"
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
      />
    </div>
  );
};

export default Box;
