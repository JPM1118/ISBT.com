import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel';

import repLineStyles from './styles/represented-lines.module.scss';

export default class extends Component {
  componentDidMount() {
    this.defaultAnchor.focus()
  }
  render() {
    console.log(this.props.data)
    return (
      <Layout>
        <div className={repLineStyles.container}>
          <div className={repLineStyles.header}>
            <ul>
              <li><a href='#'
                ref={anchor => this.defaultAnchor = anchor}
                id='castel'>Castel Maison</a></li>
              <li><a href='#' id='studio'>Studio Art Leather Interiors</a></li>
              <li><a href="#" id='aesthetics'>Aesthetics Wallcoverings</a></li>
            </ul>
          </div>
          <Carousel image={this.props.data.imgArray.edges} />
        </div>
      </Layout>
    )
  }
}
export const carouselQuery = graphql`{
  imgArray:allFile(filter:{name:{regex:"/gl/"}}) {
       edges{
        node {
            childImageSharp{
              fluid(maxWidth:1000){
                ...GatsbyImageSharpFluid
              }
            }
          
        }
      }
    }
  }
`;
