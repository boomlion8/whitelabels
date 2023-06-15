import "./arrowdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function Arrowdown({ arr, setArr }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div className="arrowdown-btn" onMouseMove={(e) => setIsActive(!isActive)}>
        <ArrowDropDownIcon className="arrowIcon" />
      </div>
      {isActive && (
        <div className="arrowdown-content">
          <div className="arrowdown-item">loren-ipsum</div>

          <div className="arrowdown-item">loren-ipsum</div>

          <div className="arrowdown-item">loren-ipsum</div>

          <div className="arrowdown-item">loren-ipsum</div>
        </div>
      )}
    </div>
  );
}
