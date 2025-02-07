import { useState } from "react";
import profileImage from "./assets/profile-image.png";
import portfolioImage from "./assets/profile-image.png";
import muyResume from "./assets/myresume.pdf";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!---DARK MODE TOGGLE----> */}
      <label class="dark-mode-toggle" for="dark-mode">
        <i class="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />

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

              <ul class="flex-container nav-items">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              {/* <!---Hamburger Menu on Mobile--> */}
              <label for="hamburger-menu">
                <i class="fa-solid fa-bars"></i>
              </label>

              <input type="checkbox" id="hamburger-menu" />

              {/* <!---Side Menu--> */}
              <div class="side-menu">
                <ul class="flex-container side-menu-items">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* <!---HERO SECTION----> */}
        <section id="home">
          <div class="grid-container hero-section">
            <div class="intro-text">
              <p>
                Hi I am <b>Swornim Maharjan</b>
              </p>
              <p>
                <b>Web Engineer</b>
              </p>
              <br />
              <p>I love to code!</p>

              <a href={muyResume} download>
                <button class="download-btn">
                  Download CV <i class="fa-solid fa-download"></i>
                </button>
              </a>
            </div>

            <div class="profile-image">
              <img src={profileImage} alt="profile-image" />
            </div>
          </div>
        </section>

        {/* <!--Summary Section---> */}
        <section>
          <div class="flex-container summary-container">
            <div class="flex-container">
              <i class="fa-solid fa-award"></i>

              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>

            <div class="vertical-line">|</div>

            <div class="flex-container">
              <i class="fa-solid fa-laptop"></i>

              <div>
                <span>5+</span>
                <p>Projects</p>
              </div>
            </div>

            <div class="vertical-line">|</div>

            <div class="flex-container">
              <i class="fa-solid fa-briefcase"></i>

              <div>
                <span>1+</span>
                <p>Years</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Skills Section--> */}
        <section id="skills">
          <center>
            <h2>Skills</h2>
          </center>

          <div class="flex-container skills-container">
            <div>
              <i class="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>

            <div>
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>

            <div>
              <i class="fa-brands fa-js"></i>
              <p>JS</p>
            </div>

            <div>
              <i class="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>

            <div>
              <i class="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>

        {/* <!-- My Recent Work Section --> */}
        <section id="projects">
          <center>
            <h2>My Recent Work</h2>
          </center>

          <div class="flex-container">
            {/* <!----Project 1------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 2------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 3------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 4------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 5------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 6------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>

            {/* <!----Project 7------> */}
            <div class="project-card">
              <div class="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>

              <div class="card-icons">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>

              <div class="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!----About Me Section-------> */}
        <section class="about-me-section" id="about">
          <center>
            <h2>About Me</h2>
          </center>

          <div class="flex-container about-me-container">
            <div>
              <img src="./assets/profile-image.png" alt="profile-image" />
            </div>

            <div class="bio-container">
              <h4>Dented Code</h4>
              <p>
                Narendra Sunar is a seasoned full-stack engineer with expertise
                in React, Ruby on Rails, and Node.js, spanning over 6 years in
                software development. Passionate about impactful web
                applications, he mentors junior developers with enthusiasm,
                finding it a rewarding investment of his time. Narendra's
                teaching extends to HTML and CSS basics, where he employs
                interactive methods like hands-on coding and PowerPoint slides.
                Recently, he's delved into CSS animations and integrating tools
                like Intro.js into React applications. With a knack for detail,
                Narendra refines his coding style with features like Flow for
                type checking, demonstrating a commitment to robust and
                efficient development practices.
              </p>
            </div>
          </div>
        </section>

        {/* <!---Get In Touch Section----> */}
        <section id="contact">
          <center>
            <h4>Get In Touch</h4>
          </center>

          <div class="flex-container get-in-touch-container">
            <a>
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a>
              <i class="fa-brands fa-github"></i>
            </a>
            <a>
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:04161453369">
              <i class="fa-solid fa-mobile"></i>
            </a>
          </div>

          <center>
            <h5>OR</h5>
          </center>

          <div class="mail-container">
            <a href="mailto:myemail@dentedcode.com">
              <button class="download-btn">
                myemail@dentedcode.com <i class="fa-solid fa-paper-plane"></i>
              </button>
            </a>
          </div>
        </section>

        {/* <!--Footer--> */}
        <footer>
          <div class="flex-container footer-container">
            <div>
              <h6>Links</h6>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h6>Social Links</h6>
              <ul>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Facebbok</a>
                </li>
                <li>
                  <a href="#">X</a>
                </li>
              </ul>
            </div>
          </div>

          <center class="copy-right-text">
            &copy; Copy right all reserved. Made by Dented Code
          </center>
        </footer>

        {/* <!-- Go to top section --> */}
        <div class="go-to-top">
          <a href="#home">
            <i class="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
