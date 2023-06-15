import "./titlebar.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";


export default function TitleBar() {

  



  return (
    <div className="titlebar-container">
      <div className="titlebar-item">
        <div className="titlebar-title">
          <KeyboardArrowLeftIcon className="arrowleftIcon" />
          <span className="title-big">Senior Living</span>
          <span className="title-small">New</span>
        </div>
        <div className="titleDetail">
          <span className="real">Real Estate</span>
          <span className="real">Europe</span>
          <span className="real">Closed-ended fund</span>
        </div>
      </div>

      <div className="titlebar-item2">
        <div className="titlebar-name">
          <ArrowDropDownIcon /> Published
        </div>

        <div className="titlebar-name">
          <EditOutlinedIcon />
          Edit preview
        </div>
      </div>
    </div>
  );
}
