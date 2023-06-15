import { useState } from "react";
import "./middlebar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Middlebar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="middlebar-container">
      <div className="middlebar-item1">
        <div className="language" onClick={(e) => setIsActive(!isActive)}>
          Language
        </div>

    
          <ArrowDropDownIcon onClick={(e) => setIsActive(!isActive)} />
          {isActive && (
            <div className="dropdown">
              <div className="dropdown-item">English</div>
              <div className="dropdown-item">German</div>
              <div className="dropdown-item">French</div>
              <div className="dropdown-item">British</div>
            </div>
          )}
  
      </div>

      <div className="middlebar-item2">Unpublished changes</div>

      <div className="middlebar-item3">Revert back to live version</div>

      <div className="middlebar-item4">Publish changes</div>
    </div>
  );
}
