import "./menu.css";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import FeedIcon from "@mui/icons-material/Feed";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InsightsIcon from "@mui/icons-material/Insights";


export default function Menu() {
  // const [post, setPost] = useState();

  
  

  return (
    <>
      <div className="menu-container">
        <div className="menu-item">
          <HomeIcon className="menuIcon" />
          <span className="about">About</span>
        </div>

        <div className="menu-item">
          <ListIcon />
          <span className="about">Detail</span>
        </div>

        <div className="menu-item">
          <DescriptionIcon />
          <span className="about">Document</span>
        </div>

        <div className="menu-item">
          <FeedIcon />
          <span className="about">News</span>
        </div>
        <div className="menu-item">
          <SignalCellularAltIcon />

          <span className="about">Reporting</span>
        </div>

        <div className="menu-item">
          <InsightsIcon />
          <span className="about">Analytics</span>
        </div>
      </div>

      <div>
   
      </div>
    </>
  );
}
