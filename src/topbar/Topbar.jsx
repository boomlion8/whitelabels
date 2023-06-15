import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import cat from "./cat.jpg";
import whirlpool from "./whirlpool.jpg";
import { useState } from "react";
import Notification from "./Notificationbar";
import Arrowdown from "./Arrowdown";

export default function Topbar() {
  const [touch, setTouch] = useState("");

  const [arr, setArr] = useState("");

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src={whirlpool} alt="" className="logo" />
        Whitelabel
      </div>

      <div className="topbarCenter">
        <div className="listItem">
          <span className="ListItemName">Products</span>
          <span className="ListItemName">Investors</span>
          <span className="ListItemName">Investments</span>
          <span className="ListItemName">Users</span>
        </div>
      </div>

      <div className="topbarCenter2">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="What are you looking for?"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="notification-btn">
          <Notification
            touch={touch}
            setTouch={setTouch}
            className="notificationIcon"
          />
        </div>

        <img src={cat} alt="" className="catImage" />
        <div className="text">
          <span className="text1">Whitelabel</span>
          <span className="text2">Lena Kaiser</span>
        </div>
        <Arrowdown arr={arr} setArr={setArr} className="dropdownIcon" />
      </div>
    </div>
  );
}
