import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

const Studioart = () => {
  const designer = "studio";
  const designerName = "Studioart";
  const data = useStaticQuery(graphql`
    query {
      studio: allFile(filter: { name: { regex: "/^sa[1-3]/" } }) {
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

export default Studioart;
