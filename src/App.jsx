import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./components/topBar";
import Bio from "./components/bio";
import TectLogo from "./components/techLogo";
import ProfileSection from "./components/profileSec";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <Bio />
      <TectLogo />
      <ProfileSection />
    </>
  );
}

export default App;
