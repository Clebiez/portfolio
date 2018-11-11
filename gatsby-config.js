module.exports = {
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://www.clebiez.com',
          sitemap: 'https://www.clebiez.com/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
    ]
  }