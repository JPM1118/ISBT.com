import React, { Component } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DesignerPageLayout from "../components/designerPageLayout/DesignerPageLayout";

export default () => {
  const designer = "lithos";
  const designerName = "Lithos Design";
  const data = useStaticQuery(graphql`
    query {
      lithos: allFile(filter: { name: { regex: "/^ld_[1-3]/" } }) {
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
