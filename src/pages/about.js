import React from "react";
import Layout from "../components/layout/layout";

import aboutStyles from "./styles/about.module.scss";
import Contact from "../components/contact/contact";

const About = () => (
  <Layout>
    <div className={aboutStyles.container}>
      <div className={aboutStyles.hero}>
        <h1>
          “Customer centric, relationship driven, and trusted partner to all our
          clients”
        </h1>
      </div>
      <div className={aboutStyles.aboutBody}>
        <h2>About Us</h2>
        <p>
          <span style={{ fontStyle: "italic" }}>Interior Sources, LLC</span> is
          a multiline sales organization, serving the interior design community.
          We represent the world’s finest luxury products for the residential,
          hospitality, and commercial markets in Illinois and Wisconsin.
          Interior Sources thoughtfully curates each client’s presentation to
          their design aesthetic. We are customer centric, relationship driven,
          and trusted a partner to all our clients.
        </p>
        <p>
          Barbara Todd established Interior Sources after years of experience in
          the interior design industry, both in design and sales. Her passion,
          knowledge, and experience with textiles, leather, wallcovering,
          lighting, and furniture make her an invaluable partner and educator in
          navigating the scope of each design project.
        </p>
      </div>
      <Contact />
    </div>
  </Layout>
);

export default About;
