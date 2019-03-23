import React from 'react';
import Img from 'gatsby-image';

import postStyles from './post.module.scss'
import likeIcon from './likeIcon.png';
import commentsIcon from './commentsIcon.png';

const Post = ({ node }) => (
  <a href={`https://www.instagram.com/p/${node.id}/`}>
    <div className={postStyles.postContainer}>
      <div className={postStyles.overlay}>
        <div className={postStyles.iconWrapper}>
          <div className={postStyles.icon}><img src={likeIcon} alt="instagram like icon" /><span>{node.likes}</span></div>
          <div className={postStyles.icon}><img src={commentsIcon} alt="instagram comments icon" /><span>{node.comments}</span></div>
        </div>
      </div>
      <Img fluid={node.localFile.childImageSharp.fluid} />
    </div>
  </a>
)
const orderedNodes = (array) => {
  return array.sort((a, b) => (a.node.timestamp < b.node.timestamp) ? 1 : -1)
}

export default (props) => (
  <div className={postStyles.gridContainer}>
    {orderedNodes(props.nodes.edges).map((ig, index) => (
      <Post key={index} node={ig.node} />
    ))}
  </div>
)