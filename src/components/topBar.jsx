import { Link } from "react-router-dom";

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

        <nav className="iconsContainer">
          <Link to="/story" className="navIcon">My Story</Link>
          <a href="/#projects" className="navIcon">Projects</a>
          <Link to="/design" className="navIcon">Design</Link>
          <a href="mailto:swornimaus@gmail.com" className="navIcon">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
