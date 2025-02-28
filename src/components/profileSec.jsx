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

      <section class="under-construction">
        <h2>🚧 Under Construction 🚧</h2>
        <p>Working on rest of the section. Stay tuned for updates!</p>
        <div class="loader"></div>
      </section>
    </div>
  );
};

export default ProfileSection;
