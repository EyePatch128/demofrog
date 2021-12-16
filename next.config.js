module.exports = {
  images: {
    loader: "imgix",
    path: ""
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
}