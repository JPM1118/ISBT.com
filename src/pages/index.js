import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import indexStyles from "./styles/index.module.scss";
import Title from "../components/title/title";
import Instagram from "../components/instagram/instagram";

const Index = ({ data: { allInstaNode } }) => {
  debugger;
  return (
    <Layout>
      <div className={indexStyles.container}>
        <Title />
        <Instagram nodes={allInstaNode} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allInstaNode {
      edges {
        node {
          id
          likes
          caption
          comments
          timestamp
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
export default Index;
