import React from "react";

const DesignerLink = ({ designer }) => {
  const LinkWrapper = ({ link }) => {
    const style = {
      width: "200px",
      textAlign: "center",
      margin: "20px auto",
      fontSize: "18px",
    };
    return (
      <div style={style}>
        <a
          style={{ textDecoration: "underline", color: "#464646" }}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Link
        </a>
      </div>
    );
  };

  switch (designer) {
    case "castel":
      return (
        <LinkWrapper link="https://www.castelmaison.com/shop/fabric/sale/castel-maison" />
      );
    case "guellLamadrid":
      return (
        <LinkWrapper link="https://www.castelmaison.com/shop/fabric/sale/guell-lamadrid" />
      );
    case "lcdlm":
      return (
        <LinkWrapper link="https://www.castelmaison.com/shop/fabric/sale/les-creations-de-lamadrid" />
      );
    case "studio":
      return <LinkWrapper link="http://www.studioart.it/en" />;

    case "spaces":
      return <LinkWrapper link="https://www.4spaces.ch/" />;
    case "lithos":
      return <LinkWrapper link="https://www.lithosdesign.com/" />;
    case "charles":
      return <LinkWrapper link="https://www.charles.fr/" />;
    default:
      return null;
  }
};

export default DesignerLink;
