import React from "react";
// import { Link } from "gatsby";
import Img from "gatsby-image";

import carouselStyles from "./carousel.module.scss";
import leftArrow from "./arrowIcons/leftArrow.svg";
import rightArrow from "./arrowIcons/rightArrow.svg";

const Carousel = ({ image, designerName }) => {
  const initialState = React.useMemo(() => ({ currentIndex: 0 }), []);

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => setState(initialState), [initialState]);

  const previousSlide = () => {
    const lastIndex = image.length - 1;
    const { currentIndex } = state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;

    setState({
      currentIndex: index,
    });
  };
  const nextSlide = () => {
    const lastIndex = image.length - 1;
    const { currentIndex } = state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;

    setState({
      currentIndex: index,
    });
  };

  const currentImage = (index) => {
    const { currentIndex } = state;
    return index === currentIndex;
  };

  const renderArrows = () => {
    return image.length > 1;
  };
  const orderedNodes = (array) => {
    return array.sort((a, b) => (a.node.name > b.node.name ? 1 : -1));
  };
  const orderImages = orderedNodes(image);
  return (
    <div className={carouselStyles.container}>
      {renderArrows() ? (
        <>
          <button className={carouselStyles.arrowLeft} onClick={previousSlide}>
            <img src={leftArrow} alt="previous slide" />
          </button>
          <button className={carouselStyles.arrowRight} onClick={nextSlide}>
            <img src={rightArrow} alt="next slide" />
          </button>
        </>
      ) : null}

      <div className={carouselStyles.imgSlide}>
        <Img
          fluid={orderImages[state.currentIndex].node.childImageSharp.fluid}
          alt={designerName}
        />
      </div>

      <ul className={carouselStyles.imageList}>
        {image.map((box, idx) => {
          return (
            <li key={idx}>
              <div
                className={carouselStyles.imageBox}
                id={idx}
                style={currentImage(idx) ? { background: "white" } : null}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Carousel;
