import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Carousel from '../components/carousel/carousel';
import Modal from '../components/modal/modal';

import repLineStyles from './styles/represented-lines.module.scss';

export default class extends Component {
  state = {
    focusedElement: 'castel',
    showSubElements: true,
    focusedSubElement: 'castel'
  };
  handleClick = event => {
    event.target.id === 'castel'
      ? this.setState({
        focusedElement: event.target.id,
        showSubElements: true
      })
      : this.setState({
        focusedElement: event.target.id,
        showSubElements: false
      });
  };

  handleSubClick = event => {
    this.setState({ focusedSubElement: event.target.id });
  };

  handleImgRequest = () => {
    return this.state.showSubElements
      ? this.state.focusedSubElement
      : this.state.focusedElement;
  };

  render() {
    const showSubs = this.state.showSubElements
      ? repLineStyles.display
      : repLineStyles.noDisplay;
    const focusSubs = id =>
      this.state.focusedSubElement === id
        ? repLineStyles.subFocused
        : repLineStyles.subNotFocused;
    const focus = id =>
      this.state.focusedElement === id ? repLineStyles.focused : null;
    const designer = this.state.showSubElements
      ? this.state.focusedSubElement
      : this.state.focusedElement
    return (
      <Layout>
        <Modal />
        <div className={repLineStyles.container}>
          <div className={repLineStyles.header}>
            <ul>
              <li
                onClick={this.handleClick}
                className={focus('castel')}
                id='castel'
              >
                Castel Maison
              </li>
              <li
                onClick={this.handleClick}
                className={focus('studio')}
                id='studio'
              >
                Studio Art Leather Interiors
              </li>
              <li
                onClick={this.handleClick}
                className={focus('aesthetics')}
                id='aesthetics'
              >
                Aesthetics Wallcoverings
              </li>
            </ul>
          </div>
          <div className={showSubs}>
            <div className={repLineStyles.castelSubs}>
              <ul>
                <li
                  onClick={this.handleSubClick}
                  className={focusSubs('castel')}
                  id='castel'
                >
                  Castel
                </li>
                <li
                  onClick={this.handleSubClick}
                  className={focusSubs('guellLamadrid')}
                  id='guellLamadrid'
                >
                  Guell Lamadrid
                </li>
                <li
                  onClick={this.handleSubClick}
                  className={focusSubs('lcdlm')}
                  id='lcdlm'
                >
                  Les Creations de la Maison
                </li>
              </ul>
            </div>
          </div>
          <Carousel designer={designer} image={this.props.data[this.handleImgRequest()].edges} />
        </div>
      </Layout>
    );
  }
}
export const fluidImage = graphql`
  fragment fluidImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
export const carouselQuery = graphql`
  query {
    castel: allFile(filter: { name: { regex: "/^c[1-3]/" } }) {
      ...fluidImage
    }
    guellLamadrid: allFile(filter: { name: { regex: "/gl[1-3]/" } }) {
      ...fluidImage
    }
    lcdlm: allFile(filter: { name: { regex: "/lc[1-3]/" } }) {
      ...fluidImage
    }
    studio: allFile(filter: { name: { regex: "/^sa[1-3]/" } }) {
      ...fluidImage
    }
    aesthetics: allFile(filter: { name: { regex: "/^aw/" } }) {
      ...fluidImage
    }
  }
`;
