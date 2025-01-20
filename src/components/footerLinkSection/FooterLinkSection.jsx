import P from "../p/P";

import "./footerLinkSection.scss"

const FooterLinkSection = ({ links, title }) => {
  return (
    <section className="FooterLinkSection">
      <P title={title} bold={true} />
      {
        links.map((link, i) => {
          return <P title={link} key={i} hover={true} />
        })
      }
    </section>
  );
};

export default FooterLinkSection;
