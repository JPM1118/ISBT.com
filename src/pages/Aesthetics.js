import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel';
import Modal from '../components/modal/modal';

import repLineStyles from './styles/represented-lines.module.scss';

export default class extends Component {
  render() {
    const designer = 'aesthetics';
    const designerName = 'Aesthetics Wallcoverings'
    return (
      <Layout>
        <Modal />
        <div className={repLineStyles.container}>
          <h1>{designerName}</h1>
          <Carousel designer={designer} designerName={designerName} image={this.props.data[designer].edges} />
        </div>
      </Layout>
    );
  }
}
export const carouselQuery = graphql`
  query {
    aesthetics: allFile(filter: { name: { eq: "aw" } }) {
      ...fluidImage
    }
  }
`;
