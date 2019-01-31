import React, { Component } from 'react'
import Img from 'gatsby-image'

import carouselStyles from './carousel.module.scss';
import leftArrow from './arrowIcons/leftArrow.png';
import rightArrow from './arrowIcons/rightArrow.png';


export default class carousel extends Component {

  render() {

    return (
      <div className={carouselStyles.container}>
        <div
          className={carouselStyles.arrowLeft}
          onClick={this.previousSlide}
        >
          <img src={leftArrow} alt="previous slide" />
        </div>
        <div className={carouselStyles.imgSlide}>
          <Img fluid={this.props.image[2].node.childImageSharp.fluid} />
        </div>
        <div
          className={carouselStyles.arrowRight}
          onClick={this.nextSlide}
        >
          <img src={rightArrow} alt="next slide" />
        </div>
      </div>
    )
  }
}