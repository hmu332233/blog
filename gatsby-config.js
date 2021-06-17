module.exports = {
  siteMetadata: {
    githubLink: `https://github.com/hmu332233/blog`,
    siteUrl: `https://blog-new.minung.dev`,
    title: `minung--dev-logs`,
    description: `1년에 한번은 회고를 쓰기 위해 돌아오는 블로그입니다.`,
    author: `minung.han`,
    profile: {
      image: `https://avatars2.githubusercontent.com/u/10302969?v=4?v=3&s=88`,
      name: `minung.han`,
      description: `내가 쓰기 위해 만드는 자급자족 사이드 프로젝트를 즐겨합니다.`,
      github: `https://github.com/hmu332233`,
    },
    utterances: `hmu332233/utterances.blog`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-7J4V8XW5JH', // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `abount`,
        path: `${__dirname}/contents/about`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        enable: process.env.NODE_ENV === 'production',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minung--dev-log`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@containers': 'src/containers',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'jsx'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
