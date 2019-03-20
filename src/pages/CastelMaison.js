import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel';
import Modal from '../components/modal/modal';

import repLineStyles from './styles/represented-lines.module.scss';

export default class extends Component {
  render() {
    const designer = 'castel';
    console.log(this.props.data)
    return (
      <Layout>
        <Modal />
        <div className={repLineStyles.container}>
          <h1>Castel Maison</h1>
          <Carousel designer={designer} image={this.props.data[designer].edges} />
        </div>
      </Layout>
    );
  }
}
// export const fluidImage = graphql`
//   fragment fluidImage on FileConnection {
//     edges {
//       node {
//         childImageSharp {
//           fluid(maxWidth: 1200, maxHeight: 700, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `;
export const castelQuery = graphql`
  query {
    castel: allFile(filter: { name: { regex: "/^c[1-3]/" } }) {
      ...fluidImage
    }
  }
`;
