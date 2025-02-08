import { useState } from "react";
import profileImage from "./assets/profile-image.png";
import portfolioImage from "./assets/profile-image.png";
import muyResume from "./assets/myresume.pdf";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UList from "./Components/UList";
import Summary from "./Components/Summary";
import Skill from "./Components/Skill";
import RecentWork from "./Components/RecentWork";
import Aboutme from "./Components/Aboutme";
import Getin from "./Components/Getin";
import Footer from "./Components/Footer";
import Gotop from "./Components/Gotop";
import DarkMode from "./Components/Darkmode";
import SideMenu from "./Components/SideMenu";
import HeroSection from "./Components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DarkMode />

      <div class="wrapper-container">
        <header>
          {/* <!---Navbar--> */}
          <nav>
            <div class="flex-container navbar-container">
              <div class="flex-container">
                <div class="logo-name">Dented</div>
                <div class="line">|</div>
                <div>Soft. Engineer</div>
              </div>

              <UList />

              {/* <!---Hamburger Menu on Mobile--> */}
              <label for="hamburger-menu">
                <i class="fa-solid fa-bars"></i>
              </label>

              <input type="checkbox" id="hamburger-menu" />

              {/* <!---Side Menu--> */}
              <SideMenu />
            </div>
          </nav>
        </header>

        <HeroSection />

        <Summary />

        <Skill />

        <RecentWork />

        <Aboutme />

        <Getin />

        <Footer />

        <Gotop />
      </div>
    </>
  );
}

export default App;
