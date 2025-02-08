import portfolioImage from "../assets/profile-image.png";

const RecentWork = () => {
  return (
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
  );
};

export default RecentWork;
