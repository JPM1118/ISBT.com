import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout'
import indexStyles from './styles/index.module.scss';
import Title from '../components/title/title';
import Instagram from '../components/instagram/instagram';

export default ({ data: { allInstaNode } }) =>
  <Layout>
    <div className={indexStyles.container}>
      <Title />
      <Instagram nodes={allInstaNode} />
    </div>
  </Layout>

export const pageQuery = graphql`
query ScrapingQuery {
  allInstaNode(filter: { username: { eq: "interiorsourcesbtodd" } }) {
    edges {
      node {
        id
        username
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
`
