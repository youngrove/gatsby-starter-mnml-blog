module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Mnml Blog",
    siteUrl: "https://mnmlblog.gatsbyjs.io/",
    description: "The most minimal Gatsby starter for Blog",
    headline: "Writing and publishing content for devyoung", // Headline for schema.org JSONLD
    gitUrl: "https://github.com/youngban", // Your git profile link
    lang: "en",
    image: "/logo/logo.png",
    author: "devyoung",
    organization: {
      url: "https://github.com/youngban/gatsby-starter-mnml-blog",
      logo: "/logo/logo.png",
    },
    ogLanguage: "en_US",
    utterances: "youngban/gatsby-starter-mnml-comments", // Your repository for utterances comment
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets|images/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-react-helmet`,
  ],
};
