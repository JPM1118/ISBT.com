import React from "react";
import { Link } from "gatsby";
import layoutStyles from "./layout.module.scss";

import Seo from "../SEO";
import Header from "../header/header";
import Footer from "../footer/footer";

const ListLink = (props) => (
  <li>
    <Link to={props.to}> {props.children}</Link>
  </li>
);

const Layout = ({ children }) => (
  <>
    <Seo />
    <div className={layoutStyles.container}>
      <Header ListLink={ListLink} />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
