import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel';
import repLineStyles from './styles/represented-lines.module.scss';

export default class extends Component {
  render() {
    const designer = 'lithos';
    const designerName = 'Lithos Design'
    return (
      <Layout>
        <div className={repLineStyles.container}>
          <h1>{designerName}</h1>
          <div className={repLineStyles.sampleRequest}>
            For memo requests and quotes, please use the contact form in the{' '}
            <Link className={repLineStyles.aboutLink} to='/about/'>About Page</Link> or email:{' '}
            <span className={repLineStyles.email} >
              Barbara@interiorsourcesbtodd.com
            </span>
          </div>
          <Carousel designer={designer} designerName={designerName} image={this.props.data[designer].edges} />
        </div>
      </Layout>
    );
  }
}
export const carouselQuery = graphql`
  query {
    lithos: allFile(filter: { name: { regex: "/^ld_[1-3]/" } }) {
      ...fluidImage
    }
  }
`;
