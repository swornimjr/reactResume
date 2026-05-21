const HireButton = ({ text, href = "#" }) => {
  return <a href={href} className="hireBtn" target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">{text}</a>;
};

export default HireButton;

export const HireButton2 = ({ text, href = "#" }) => {
  return <a href={href} className="hireBtn2">{text}</a>;
};
