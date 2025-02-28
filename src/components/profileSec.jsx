import HireButton, { HireButton2 } from "./button";

const ProfileSection = () => {
  return (
    <div className=" profileContainer">
      <div className="profilePicrure"></div>
      <div className="profilet1">
        What makes me <br /> different?
      </div>
      <div className="profilet2">
        I blend design and functionality to create impactful solutions, turning
        ideas into reality and delivering exceptional user experiences.
      </div>
      <div>
        <HireButton text="Download resume" />
        <HireButton2 text="Browse my work" />
      </div>
      <div className="cardsFlex">
        {/* fontend */}
        <div className="frontendCard">
          <h3>
            Front-end
            <br />
            development
          </h3>
          <hr />
          <br />
          <div className="font">
            Expert in HTML, CSS, React, and Vue, JavaScript, crafting
            responsive, high-performance websites.
          </div>
          <div className="logoFlex">
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-vuejs-plain colored"></i>
          </div>
        </div>

        {/* backend */}
        <div className="frontendCard">
          <h3>
            Back-end
            <br />
            development
          </h3>
          <hr />
          <br />
          <div className="font">
            Expert in Node.js, MongoDB, and NoSQL databases, building scalable,
            high-performance backend systems.
          </div>
          <div className="logoFlex">
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-mongodb-plain colored"></i>
            <i class="devicon-express-original colored"></i>
          </div>
        </div>
      </div>
      <div>
        <h1>Showcasing my work</h1>
        <div>
          <div class="showcase-container">
            <h2 class="showcase-title">Showcase of Projects</h2>
            <div class="project-grid">
              <a href="https://" class="project-card news-app" target="_blank">
                <div class="project-info">
                  <h3>Reebok Web Application</h3>
                  <p>
                    A React-based web application for Reebok, featuring a
                    dynamic product catalog, API-powered product listings, and a
                    sleek UI to enhance the shopping experience.
                  </p>
                </div>
              </a>

              <a
                href="https://"
                class="project-card contact-manager"
                target="_blank"
              >
                <div class="project-info">
                  <h3>Black Friday Web</h3>
                  <p>
                    A promotional web platform for Black Friday sales, offering
                    real-time product deals, discount tracking, and a seamless
                    shopping interface.
                  </p>
                </div>
              </a>

              <a
                href="https://"
                class="project-card expense-tracker"
                target="_blank"
              >
                <div class="project-info">
                  <h3>Facebook User Interface using CSS</h3>
                  <p>
                    A front-end project replicating Facebook's UI using HTML and
                    CSS, designed to showcase modern styling techniques and
                    responsive layouts.
                  </p>
                </div>
              </a>

              <a
                href="https://"
                class="project-card calc-tracker"
                target="_blank"
              >
                <div class="project-info">
                  <h3>Calculator  Interface using JS</h3>
                  <p>
                    A front-end project  using HTML and
                    CSS, designed to showcase modern styling techniques and
                    responsive layouts.
                  </p>
                </div>
              </a>
            </div>
            <button class="show-more-btn" onclick="showMoreProjects()">
              Show More
            </button>
          </div>
        </div>
      </div>

      <section class="under-construction">
        <h2>🚧 Under Construction 🚧</h2>
        <p>Working on rest of the section. Stay tuned for updates!</p>
        <div class="loader"></div>
      </section>
    </div>
  );
};

export default ProfileSection;
