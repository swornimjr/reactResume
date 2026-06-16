import { Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import Bio from "./components/bio";
import TectLogo from "./components/techLogo";
import ProfileSection from "./components/profileSec";
import Footer from "./components/footer";
import MyStory from "./pages/myStory";
import DesignPage from "./pages/designPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <TopBar />
            <section id="about"><Bio /></section>
            <section id="skills"><TectLogo /></section>
            <section id="projects"><ProfileSection /></section>
            <Footer />
          </>
        }
      />
      <Route path="/story" element={<MyStory />} />
      <Route path="/design" element={<DesignPage />} />
    </Routes>
  );
}

export default App;
