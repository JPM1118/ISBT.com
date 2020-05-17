import React, { Component } from "react";
import { Link } from "gatsby";

import headerStyles from "./header.module.scss";
import logo from "./logo.svg";
import hamburger from "./hamburger.svg";

const initialState = { showNav: false };

class Header extends Component {
  state = initialState;

  handleBurgerClick = () => {
    this.setState({ showNav: !this.state.showNav });
  };
  resetState = () => {
    this.setState(initialState);
  };
  componentDidMount() {
    window.addEventListener("resize", this.resetState);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.resetState);
  }

  render() {
    const ListLink = this.props.ListLink;
    const display = () => {
      if (typeof window !== `undefined`) {
        return global.window.innerWidth <= 1000 && !this.state.showNav
          ? { display: "none" }
          : { display: "inline-block" };
      }
    };
    return (
      <header>
        <div className={headerStyles.header}>
          <div className={headerStyles.gridContainer}>
            <div
              className={headerStyles.burgerMenu}
              onClick={this.handleBurgerClick}
            >
              <img src={hamburger} alt="nav menu" />
            </div>
            <Link to="/" className={headerStyles.imgContainer}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={headerStyles.linkGroup} style={display()}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/CastelMaison/">Castel</ListLink>
            <ListLink to="/GuellLamadrid/">Guell Lamadrid</ListLink>
            <ListLink to="/LesCreations/">
              Les Cr&eacute;ations de la Maison
            </ListLink>
            <ListLink to="/Studioart/">Studioart</ListLink>
            <ListLink to="/Aesthetics/">Aesthetics Wallcoverings</ListLink>
            <ListLink to="/4Spaces/">4Spaces</ListLink>
            <ListLink to="/LithosDesign/">Lithos Design</ListLink>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
