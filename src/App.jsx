import "./App.css";
import TopBar from "./components/topBar";
import Bio from "./components/bio";
import TectLogo from "./components/techLogo";
import ProfileSection from "./components/profileSec";
import GraphicDesign from "./components/graphicDesign";

function App() {
  return (
    <>
      <TopBar />
      <section id="about"><Bio /></section>
      <section id="skills"><TectLogo /></section>
      <section id="projects"><ProfileSection /></section>
      <section id="design"><GraphicDesign /></section>
    </>
  );
}

export default App;
