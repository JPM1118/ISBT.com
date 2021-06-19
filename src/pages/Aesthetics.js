import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

const Aesthetics = () => {
  const data = useStaticQuery(graphql`
    query {
      aesthetics: allFile(filter: { name: { eq: "aw" } }) {
        ...fluidImage
      }
    }
  `);
  const designer = "aesthetics";
  const designerName = "Aesthetics Wallcoverings";

  return (
    <DesignerPageLayout
      designer={designer}
      designerName={designerName}
      data={data}
    />
  );
};

export default Aesthetics;
