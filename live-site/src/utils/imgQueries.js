
export const query =
  `{
  imgArray:allFile(filter:{name:{regex:"/gl/"}}) {
       edges{
        node {
            childImageSharp{
              fluid(maxWidth:1000){
                ...GatsbyImageSharpFluid
              }
            }
          
        }
      }
    }
  }
`