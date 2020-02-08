import React, { Component } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

export default () => {
  const designer = "lcdlm";
  const designerName = `Les Cr\u00E9ations de la Maison`;
  const data = useStaticQuery(graphql`
    query {
      lcdlm: allFile(filter: { name: { regex: "/lc[1-3]/" } }) {
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
