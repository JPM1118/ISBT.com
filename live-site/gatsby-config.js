module.exports = {
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }

  ]
}