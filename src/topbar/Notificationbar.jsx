import "./notification.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import cat from "./cat.jpg";

export default function Notification({ touch, setTouch }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="notification-container">
      <div className="notification-btn" onMouseMove={(e) => setIsActive(!isActive)}>
        <NotificationsNoneIcon className="notificationIcon" />
      </div>

      {isActive && (
        <div className="notification-content">
          <div className="notification-item">
            <div className="item">
              <img src={cat} alt="" className="catimage" />
            </div>

            <div className="content">
              <div className="content-title">Content Title</div>

              <div className="random">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </div>
            </div>

            <div className="item">
              <AccessibilityIcon />
            </div>
          </div>


          <div className="notification-item">
            <div className="item">
              <img src={cat} alt="" className="catimage" />
            </div>

            <div className="content">
              <div className="content-title">Content Title</div>

              <div className="random">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </div>
            </div>

            <div className="item">
              <AccessibilityIcon />
            </div>
          </div>


          <div className="notification-item">
            <div className="item">
              <img src={cat} alt="" className="catimage" />
            </div>

            <div className="content">
              <div className="content-title">Content Title</div>

              <div className="random">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </div>
            </div>

            <div className="item">
              <AccessibilityIcon />
            </div>
          </div>


          <div className="notification-item">
            <div className="item">
              <img src={cat} alt="" className="catimage" />
            </div>

            <div className="content">
              <div className="content-title">Content Title</div>

              <div className="random">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </div>
            </div>

            <div className="item">
              <AccessibilityIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
