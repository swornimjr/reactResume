import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="footerName">Swornim Maharjan</div>
          <div className="footerTagline">Building for real people, not portfolios.</div>
        </div>

        <div className="footerNav">
          <a href="/#about" className="footerLink">About</a>
          <a href="/#skills" className="footerLink">Skills</a>
          <a href="/#projects" className="footerLink">Projects</a>
          <Link to="/design" className="footerLink">Design</Link>
          <Link to="/story" className="footerLink">My Story</Link>
        </div>

        <div className="footerContact">
          <div className="footerContactLabel">Get in touch</div>
          <a href="mailto:swornimaus@gmail.com" className="footerEmail">
            swornimaus@gmail.com
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <span className="footerCopy">© 2026 Swornim Maharjan. All rights reserved.</span>
        <span className="footerMade">Made in Sydney</span>
      </div>
    </footer>
  );
};

export default Footer;
