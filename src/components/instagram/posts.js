import React from 'react';
import Img from 'gatsby-image';

import postStyles from './post.module.scss'

const Post = ({ node }) => (
  <div className={postStyles.postContainer}>
    <Img fluid={node.localFile.childImageSharp.fluid} />
  </div>
)

export default ({ nodes }) => (
  <div className={postStyles.gridContainer}>
    {nodes.edges.map(ig => (
      <Post key={ig.id} node={ig.node} />
    ))}

  </div>
)