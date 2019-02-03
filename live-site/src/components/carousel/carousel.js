import React, { Component } from 'react'
import Img from 'gatsby-image'

import carouselStyles from './carousel.module.scss';
import leftArrow from './arrowIcons/leftArrow.svg';
import rightArrow from './arrowIcons/rightArrow.svg';


export default class carousel extends Component {
  state = {
    currentIndex: 0
  }

  previousSlide = () => {
    const lastIndex = this.props.image.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    // debugger;
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
          <Img fluid={this.props.image[this.state.currentIndex].node.childImageSharp.fluid} />
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