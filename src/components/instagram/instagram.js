import React from "react";

import instagramStyles from "./instagram.module.scss";
import Posts from "./posts";

const Instagram = () => {
  return (
    <div className={instagramStyles.container}>
      <h1 className={instagramStyles.title}>Instagram</h1>
      <h2 className={instagramStyles.subTitle}>
        <a
          href="https://www.instagram.com/interiorsourcesbtodd/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @interiorsourcesbtodd
        </a>
      </h2>
      {/* <Posts /> */}
    </div>
  );
};

export default Instagram;
