// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const {
    remarkCodeHike,
  } = require("@code-hike/mdx")
  
  const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        [remarkCodeHike, { theme: "nord" }]
      ],
    },
  })
  
  module.exports = withMDX({
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  })
  