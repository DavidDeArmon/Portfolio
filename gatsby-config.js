module.exports = {
  siteMetadata: {
    title: "David DeArmon - Portfolio",
    author: "David DeArmon",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  pathPrefix: "/Portfolio",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'david-dearmon-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
