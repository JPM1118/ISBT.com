import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout'
import indexStyles from './styles/index.module.scss';
import Title from '../components/title/title';
import bentoImg from '../img/index_img/bento.jpg'
import Instagram from '../components/instagram/instagram';

export default ({ data: { allInstaNode } }) =>
  <Layout>
    <div className={indexStyles.container}>
      <Title />
      <div className={indexStyles.bentoForm}>
        <h2>Singup for your complimentary Sample Bento Box.</h2>
        <img src={bentoImg} alt="bento sample box" />
        <form name="subscribe" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="subscribe" />
          <label htmlFor="email">
            <input type="email" name="email" placeholder="email..." />
          </label>
          <button className={indexStyles.bentoButton} type="submit">Submit</button>
        </form>
      </div>
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
