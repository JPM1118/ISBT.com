import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

const GuellLamadrid = () => {
  const designer = "guellLamadrid";
  const designerName = "Guell Lamadrid";
  const data = useStaticQuery(graphql`
    query {
      guellLamadrid: allFile(filter: { name: { regex: "/gl[1-3]/" } }) {
        ...fluidImage
      }
    }
  `);
  return (
    <DesignerPageLayout
      designer={designer}
      designerName={designerName}
      data={data}
    />
  );
};

export default GuellLamadrid;
