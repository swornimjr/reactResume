import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollTwirl from "./ScrollTwirl";
import profilePic from "../assets/profilepic.png";
import kyoudaiImg from "../assets/kyoudaihostel.png";
import cafeHubImg from "../assets/cafehub.png";
import aquascapeImg from "../assets/aquascape-inspire.png";
import kirtipur from "../assets/hamro-kirtipur.png";
import khaiKoImg from "../assets/khai-ko-imposter.png";
import whistleImg from "../assets/whistle-counter.png";
import appleImg from "../assets/apple-animation.png";
import reebokImg from "../assets/rebok.JPG";
import blackImg from "../assets/black.JPG";
import fbImg from "../assets/fb.JPG";
import calcImg from "../assets/calc.JPG";

const projects = [
  {
    id: "kyoudai",
    title: "Kyoudai Hostel",
    year: "2023",
    description:
      "A full-stack hostel management web application built to streamline bookings, visitor logs, and complex hostel operations with real-time updates.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "https://kyoudaihostel.com/",
    img: kyoudaiImg,
  },
  {
    id: "cafehub",
    title: "Cafe Hub",
    year: "2023",
    description:
      "A MERN stack cafe management app featuring robust authentication, automated staff roster management, and precision inventory tracking.",
    tags: ["Express", "MERN", "Redux"],
    href: "https://cafehubs.vercel.app/",
    img: cafeHubImg,
  },
  {
    id: "aquascape",
    title: "AquaScape Inspire",
    year: "2024",
    description:
      "A Pinterest-style community platform for aquascaping hobbyists to share tank designs, discover hardscaping styles, and connect globally.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    href: "https://aqi-orpin-three.vercel.app/",
    img: aquascapeImg,
  },
  {
    id: "kirtipur",
    title: "Hamro Kirtipur",
    year: "2024",
    description:
      "A community directory for Kirtipur, Nepal featuring 11 wards, an interactive Leaflet map, verified business listings, and emergency contacts.",
    tags: ["Leaflet.js", "GeoJSON", "MERN"],
    href: "https://hamro-kirtipur.vercel.app/",
    img: kirtipur,
  },
  {
    id: "khaiko",
    title: "Khai Ko Imposter?",
    year: "2022",
    description:
      "A Nepali social deduction party game built with React Native and Expo — pass-and-play on one phone, inspired by the social dynamics of Among Us.",
    tags: ["React Native", "Expo", "UI/UX"],
    href: "https://gilded-pixie-1986f9.netlify.app",
    img: khaiKoImg,
  },
  {
    id: "whistle",
    title: "Cooker Whistle",
    year: "2023",
    description:
      "A PWA that listens through the microphone, automatically counts pressure cooker whistles, and sounds an alarm when the cooking is done.",
    tags: ["PWA", "Web Audio API", "React"],
    href: "https://pressure-cooker-whistle.vercel.app/",
    img: whistleImg,
  },
  {
    id: "apple",
    title: "Apple Animation",
    year: "2023",
    description:
      "A visually stunning Apple-inspired scroll animation project featuring smooth transitions, sticky sections, and interactive UI elements built with modern web tech.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://apple-animation-8zh8.vercel.app/",
    img: appleImg,
  },
  {
    id: "reebok",
    title: "Reebok Web App",
    year: "2022",
    description:
      "A React-based web application for Reebok featuring a dynamic product catalog, API-powered listings, and a sleek UI to enhance the shopping experience.",
    tags: ["React", "CSS", "REST API"],
    href: "#",
    img: reebokImg,
  },
  {
    id: "blackfriday",
    title: "Black Friday Web",
    year: "2022",
    description:
      "A promotional web platform for Black Friday sales offering real-time product deals, discount tracking, and a seamless shopping interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#",
    img: blackImg,
  },
  {
    id: "facebook",
    title: "Facebook UI Clone",
    year: "2021",
    description:
      "A front-end project replicating Facebook's user interface using HTML and CSS, showcasing modern layout techniques and responsive design.",
    tags: ["HTML", "CSS"],
    href: "#",
    img: fbImg,
  },
  {
    id: "calculator",
    title: "Calculator App",
    year: "2021",
    description:
      "A fully functional browser calculator built with vanilla JavaScript, featuring clean UI design and standard arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#",
    img: calcImg,
  },
];

const INITIAL_COUNT = 6;

const ProfileSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <>
      {/* ── What makes me different ── */}
      <section className="profile-section">

        <ScrollTwirl as="div" className="profile-avatar-wrap" twistDir={0} threshold={0.12}>
          <div className="profile-avatar">
            <img src={profilePic} alt="Swornim Maharjan" />
          </div>
          <div className="profile-verified">
            <span className="material-symbols-outlined">verified</span>
          </div>
        </ScrollTwirl>

        <ScrollTwirl as="h1" className="profile-heading" twistDir={1} threshold={0.12}>
          What makes me different?
        </ScrollTwirl>

        <ScrollTwirl as="p" className="profile-description" twistDir={-1} threshold={0.12}>
          I blend design and functionality to create impactful solutions, turning
          ideas into reality and delivering exceptional user experiences through
          technical mastery and artistic precision.
        </ScrollTwirl>

        <ScrollTwirl as="div" className="profile-buttons" twistDir={1} threshold={0.12}>
          <a
            href="/swornimWorkSample.pdf"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">download</span>
            Download resume
          </a>
          <a href="#projects" className="btn-glass">Browse my work</a>
          <Link to="/story" className="btn-text">
            My Story <span>→</span>
          </Link>
        </ScrollTwirl>

        {/* ── Skill cards — left twists left, right twists right ── */}
        <div className="skills-grid">
          <ScrollTwirl as="div" className="glass-card skill-card" twistDir={-1} threshold={0.12}>
            <div className="skill-card-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3>Front-end development</h3>
            </div>
            <hr className="skill-divider" />
            <p>
              Expert in HTML, CSS, React, and Vue, JavaScript, crafting
              responsive, high-performance websites with a keen eye for aesthetic
              consistency and interactive fluidity.
            </p>
            <div className="skill-stack-row">
              <span className="stack-label">Stack</span>
              <div className="skill-icons">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-vuejs-plain colored" title="Vue.js"></i>
              </div>
            </div>
          </ScrollTwirl>

          <ScrollTwirl as="div" className="glass-card skill-card" twistDir={1} threshold={0.12}>
            <div className="skill-card-header">
              <div className="skill-icon skill-icon-secondary">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <h3>Back-end development</h3>
            </div>
            <hr className="skill-divider" />
            <p>
              Expert in Node.js, MongoDB, and NoSQL databases, building
              scalable, high-performance backend systems with robust security and
              efficient data architecture.
            </p>
            <div className="skill-stack-row">
              <span className="stack-label">Stack</span>
              <div className="skill-icons">
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                <i className="devicon-express-original colored" title="Express"></i>
              </div>
            </div>
          </ScrollTwirl>
        </div>
      </section>

      {/* ── Projects showcase ── */}
      <section className="projects-section" id="projects">

        {/* Section header — each line exits independently */}
        <div className="projects-header">
          <ScrollTwirl as="div" className="section-badge" twistDir={1} threshold={0.12}>
            Portfolio Showcase
          </ScrollTwirl>
          <ScrollTwirl as="h2" className="projects-title" twistDir={-1} threshold={0.12}>
            Showcase of Projects
          </ScrollTwirl>
          <ScrollTwirl as="p" className="projects-subtitle" twistDir={1} threshold={0.12}>
            A selection of digital products, experiments, and technical
            deep-dives focused on user-centric design and robust performance.
          </ScrollTwirl>
        </div>

        <div className="project-grid-new">
          {visible.map((proj, i) => (
            // ScrollTwirl renders as <a> — becomes the grid item directly
            <ScrollTwirl
              key={proj.id}
              as="a"
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-new glass-card"
              twistDir={i % 2 === 0 ? -1 : 1}
                         >
              <div className="project-img-wrap">
                <img src={proj.img} alt={proj.title} />
                <div className="project-img-overlay" />
              </div>
              <div className="project-card-body">
                <div className="project-card-meta">
                  <h3>{proj.title}</h3>
                  <span className="project-year">{proj.year}</span>
                </div>
                <p>{proj.description}</p>
                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollTwirl>
          ))}
        </div>

        {!showAll && (
          <div className="show-more-wrap">
            <button className="btn-primary" onClick={() => setShowAll(true)}>
              Show More Projects
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default ProfileSection;
