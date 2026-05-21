import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import design6 from "../assets/design6.png";
import design7 from "../assets/design7.png";
import design8 from "../assets/design8.png";
import design9 from "../assets/design9.png";
import design10 from "../assets/design10.png";
import design11 from "../assets/design11.png";
import design12 from "../assets/design12.png";

const designs = [
  { src: design1, label: "Portrait Illustration" },
  { src: design2, label: "Portrait Illustration" },
  { src: design3, label: "Harrington — Summer Collection" },
  { src: design4, label: "Personal Branding" },
  { src: design5, label: "Harrington — 11.11 Sale Banner" },
  { src: design6, label: "Harrington — Gift Card (Light)" },
  { src: design7, label: "Harrington — Gift Card (Dark)" },
  { src: design8, label: "Harrington — Coat Collection" },
  { src: design9, label: "Harrington — Winter 2022" },
  { src: design10, label: "Logo Design" },
  { src: design11, label: "Brand Assets" },
  { src: design12, label: "Brand Assets" },
];

const GraphicDesign = () => {
  return (
    <div className="graphic-design-section">
      <h1>Graphic Design</h1>
      <p className="graphic-design-subtitle">
        Illustrations, branding, and commercial design work
      </p>
      <div className="graphic-design-grid">
        {designs.map((d, i) => (
          <div className="graphic-design-card" key={i}>
            <img src={d.src} alt={d.label} />
            <div className="graphic-design-overlay">
              <span>{d.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="graphic-design-pdf">
        <a href="/swornimWorkSample.pdf" target="_blank" rel="noopener noreferrer" className="pdf-btn">
          View Full Work Sample PDF
        </a>
      </div>
    </div>
  );
};

export default GraphicDesign;
