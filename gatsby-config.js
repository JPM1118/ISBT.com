module.exports = {
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `interiorsourcesbtodd`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Interior Sources by Barbara Todd",
        short_name: "ISBT",
        start_url: '/',
        background_color: "#464646",
        theme_color: '#464646',
        display: 'standalone',
        icon: 'static/isbtFavicon.JPEG',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    }
  ],
  siteMetadata: {
    title: "Interior Sources by Barbara Todd",
    description:
      "Multiline sales organization, serving the interior design community. We represent the world’s finest luxury products for the residential, hospitality, and commercial markets in Illinois and Wisconsin.",
    url: "https://www.interiorsourcesbtodd.com",
    image: "/isbtLogo.JPEG",
  },
}