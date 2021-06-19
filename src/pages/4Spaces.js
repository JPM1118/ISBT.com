import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

const FourSpaces = () => {
  const designer = "spaces";
  const designerName = "4Spaces";
  const data = useStaticQuery(graphql`
    query {
      spaces: allFile(filter: { name: { regex: "/^4spaces_[1-3]/" } }) {
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

export default FourSpaces;
