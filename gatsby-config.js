module.exports = {
  siteMetadata: {
    // edit below
    title: `Mark Witt Homepage + Blog`,
    author: `Mark Witt`,
    description: `Welcome :)`,
    siteUrl: `https://markwitt.me/`,
    social: {
      twitter: `markwitt_me`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Witt`,
        short_name: `Mark`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#3f51b5`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],

        plugins: [`gatsby-remark-images`],
      },
    },
  ],
};
