import React from "react";
import titleStyle from "./title.module.scss";

import castelIcon from "./castelIcon.svg";
import studioartIcon from "./studioart.svg";
import aestheticsIcon from "./aesthetics.svg";
import spacesIcon from "./4spacesIcon.png";
import lithosIcon from "./lithosIcon.png";
import ionaIcon from "./ionaIcon.png";
import sandersonIcon from "./sandersonIcon.png";

export default () => (
  <div className={titleStyle.container}>
    <div className={titleStyle.title}>
      <h1>
        Thoughtfully curated resourcing for all your interior design projects.
      </h1>
    </div>
    <div className={titleStyle.repLinesLogos}>
      <div className={titleStyle.logo}>
        <a
          href="https://www.castelmaison.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={castelIcon} alt="Castel Maison Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="http://www.studioart.it/en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={studioartIcon} alt="Studioart Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="https://www.aestheticswall.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={aestheticsIcon} alt="Aesthetics Wallcoverings Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="https://www.4spaces.ch/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={spacesIcon} alt="4Spaces Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="https://www.lithosdesign.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={lithosIcon} alt="Lithos Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="https://www.ionacrawford.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={ionaIcon} alt="Iona Crawford Logo" />
        </a>
      </div>
      <div className={titleStyle.logo}>
        <a
          href="https://www.iansanderson.co.uk/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={sandersonIcon} alt="Ian Sanderson Logo" />
        </a>
      </div>
    </div>
  </div>
);
