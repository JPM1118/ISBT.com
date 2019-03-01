import React, { Component } from 'react'
import Img from 'gatsby-image'

import carouselStyles from './carousel.module.scss';
import leftArrow from './arrowIcons/leftArrow.svg';
import rightArrow from './arrowIcons/rightArrow.svg';

const initialState = { currentIndex: 0 };
export default class carousel extends Component {
  state = initialState
  previousSlide = () => {
    const lastIndex = this.props.image.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    })
  }
  nextSlide = () => {
    const lastIndex = this.props.image.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    })
  }

  designerLink = () => {
    let { designer } = this.props
    switch (designer) {
      case 'castel':
        return 'https://www.castelmaison.com/shop/fabric/sale/castel-maison';
      case 'guellLamadrid':
        return 'https://www.castelmaison.com/shop/fabric/sale/guell-lamadrid';
      case 'lcdlm':
        return 'https://www.castelmaison.com/shop/fabric/sale/les-creations-de-lamadrid'
      case 'studio':
        return 'http://www.studioart.it/en';
      case 'aesthetics':
        return 'https://www.aestheticswall.com/'
      default:
        return null;
    }
  }
  currentImage = index => {
    const { currentIndex } = this.state;
    return index === currentIndex;
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      return this.setState(initialState);
    }
  }
  render() {
    const { image } = this.props;
    const renderArrows = () => {
      return image.length > 1
    }

    return (
      <div className={carouselStyles.container}>
        {renderArrows()
          ? <React.Fragment>
            <div
              className={carouselStyles.arrowLeft}
              onClick={this.previousSlide}
            >
              <img src={leftArrow} alt="previous slide" />
            </div>
            <div
              className={carouselStyles.arrowRight}
              onClick={this.nextSlide}
            >
              <img src={rightArrow} alt="next slide" />
            </div>
          </React.Fragment>
          : null
        }
        <div className={carouselStyles.imgSlide}>
          <Img fluid={this.props.image[this.state.currentIndex].node.childImageSharp.fluid} />
        </div>
        <div className={carouselStyles.link}>
          <a href={this.designerLink()} target="_blank" rel='noreferrer noopener'>{this.designerLink()}</a>
        </div>
        <ul className={carouselStyles.imageList}>
          {image.map((box, idx) => {
            return (
              <li key={idx}>
                <div className={carouselStyles.imageBox} id={idx} style={this.currentImage(idx) ? { background: "white" } : null} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}