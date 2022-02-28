/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash : true,
  reactStrictMode: true,
  pathMap : function () {
    return {
      '/' : { page : '/' }
    }
  } 
}

module.exports = nextConfig
