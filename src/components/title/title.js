import React from "react"
import titleStyle from './title.module.scss'

import castelIcon from './castelIcon.svg';
import studioartIcon from './studioart.svg';
import aestheticsIcon from './aesthetics.svg';


export default () =>
  <div className={titleStyle.container}>
    <div className={titleStyle.title}>
      <h1>Thoughtfully curated resourcing for all your interior design projects.</h1>
    </div>
    <div className={titleStyle.repLinesLogos}>
      <div className={titleStyle.logo} style={{ paddingTop: "7px" }}><img src={castelIcon} alt="Castel Maison Logo" /></div>
      <div className={titleStyle.logo}><img src={studioartIcon} alt="Studioart Logo" /></div>
      <div className={titleStyle.logo}><img src={aestheticsIcon} alt="Aesthetics Wallcoverings Logo" /></div>
    </div>
  </div>