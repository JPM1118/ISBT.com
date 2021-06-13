import React from "react";
import { Link } from "gatsby";

import headerStyles from "./header.module.scss";
import logo from "./logo.svg";
import hamburger from "./hamburger.svg";

const Header = ({ ListLink }) => {
  const initialState = React.useMemo(() => ({ showNav: false }), []);

  const [state, setState] = React.useState(initialState);
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleBurgerClick = () => {
    setState({ showNav: !state.showNav });
  };

  const display = () => {
    if (size[0] <= 1100 && !state.showNav) {
      return { display: "none" };
    } else return { display: "inline-block" };
  };
  return (
    <header>
      <div className={headerStyles.header}>
        <div className={headerStyles.gridContainer}>
          <button
            className={headerStyles.burgerMenu}
            onClick={handleBurgerClick}
          >
            <img src={hamburger} alt="nav menu" />
          </button>
          <Link to="/" className={headerStyles.imgContainer}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={headerStyles.linkGroup} style={display()}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/Castel/">Castel</ListLink>
          <ListLink to="/GuellLamadrid/">Guell Lamadrid</ListLink>
          <ListLink to="/LesCreations/">
            Les Cr&eacute;ations de la Maison
          </ListLink>
          <ListLink to="/Studioart/">Studioart</ListLink>
          <ListLink to="/4Spaces/">4Spaces</ListLink>
          <ListLink to="/LithosDesign/">Lithos Design</ListLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
