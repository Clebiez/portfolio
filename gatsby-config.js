module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.clebiez.com",
        sitemap: "https://www.clebiez.com/sitemap.xml",
        policy: [{userAgent: "*", allow: "/"}],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clément Le Biez`,
        short_name: `Clebiez`,
        description: `Clément Le Biez, Développeur web & mobile`,
        start_url: `/`,
        background_color: `#1c2541`,
        theme_color: `#b7d8e6`,
        display: `standalone`,
        icon: `src/static/icon.png`,
      },
    },
  ],
};