import Bottombar from "./bottombar/Bottombar";
import Content from "./content/Content";
import Menu from "./menu/Menu";
import Middlebar from "./middlebar/Middlebar";
import TitleBar from "./titlebar/Titlebar";
import Topbar from "./topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Middlebar />
      <TitleBar />
      <Menu />
      <Content />
      <Bottombar/>
    </>
  );
}

export default App;
