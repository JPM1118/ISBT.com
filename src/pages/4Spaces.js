import React, { Component } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

export default () => {
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
