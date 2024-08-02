import "./Temp.css";
import Circle from "./circle/Circle";
import { useState } from "react";
export default function Temp() {
  const [temp, settemp] = useState(20);
  const minesTemp = () => {
    settemp(temp - 1);
  };
  const plusTemp = () => {
    settemp(temp + 1);
  };
  return (
    <>
      <div className="container-temp">
        <div className="box">
          <div className={temp < 0 ? "showtempp" : "showtemp"}>{temp}°C</div>
        </div>
        <div className="container-cirle">
          <Circle name="+" onClick={plusTemp}></Circle>
          <Circle name="-" onClick={minesTemp}></Circle>
        </div>
      </div>
    </>
  );
}
