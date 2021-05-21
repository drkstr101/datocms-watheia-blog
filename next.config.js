require('dotenv').config()

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    WATHEIA_BLOG_DATOCMS_API_TOKEN:
      process.env.WATHEIA_BLOG_DATOCMS_API_TOKEN,
  },
}
