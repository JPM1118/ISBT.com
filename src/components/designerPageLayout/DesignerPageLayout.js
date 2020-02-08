import React from "react";

import Layout from "../layout/layout";
import Carousel from "../carousel/carousel";
import repLineStyles from "./designerPageStyles.module.scss";
import LinkAddress from "../linkAddress/LinkAddress";

export default props => {
  const { designer, designerName, data } = props;

  debugger;
  return (
    <Layout>
      <div className={repLineStyles.container}>
        <h1>{designerName}</h1>
        <LinkAddress designer={designer} />
        <Carousel
          designer={designer}
          designerName={designerName}
          image={data[designer].edges}
        />
      </div>
    </Layout>
  );
};
