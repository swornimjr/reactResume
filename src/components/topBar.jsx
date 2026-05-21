const TopBar = () => {
  return (
    <div className="paddingContainer">
      <div className="topBarContainer">
        <div className="nameTag">
          <div className="circleImage"></div>
          <div>
            Swornim Maharjan <br />
            <div className="availableText">- Available for work</div>
          </div>
        </div>

        <div className="iconsContainer">
          <a href="#about" className="navIcon" title="About">
            <i className="fa-solid fa-user"></i>
          </a>
          <a href="#skills" className="navIcon" title="Skills">
            <i className="fa-solid fa-id-badge"></i>
          </a>
          <a href="#projects" className="navIcon" title="Projects">
            <i className="fa-solid fa-briefcase"></i>
          </a>
          <a href="#design" className="navIcon" title="Design">
            <i className="fa-solid fa-folder"></i>
          </a>
          <a href="mailto:swornimaus@gmail.com" className="navIcon" title="Contact">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
