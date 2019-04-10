import { graphql } from 'gatsby';

export const fluidImage = graphql`
  fragment fluidImage on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        },
        name
      }
    }
  }
`;