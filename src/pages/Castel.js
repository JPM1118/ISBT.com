import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

const Castel = () => {
  const designer = "castel";
  const designerName = "Castel";
  const data = useStaticQuery(graphql`
    query {
      castel: allFile(filter: { name: { regex: "/^c[1-3]/" } }) {
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

export default Castel;
