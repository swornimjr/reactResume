import profileImage from "../assets/profile-image.png";
import muyResume from "../assets/myresume.pdf";

const HeroSection = () => {
  return (
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
  );
};
export default HeroSection;
