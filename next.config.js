// const withOptimizedImages = require('next-optimized-images')

// module.exports = withOptimizedImages({
//     images:{
//       domains: ['res.cloudinary.com'],
//     },
//     handleImages: ['jpeg', 'png', 'svg'],
//     trailingSlash: true,
//     exportPathMap: async function (
//       defaultPathMap,
//       { dev, dir, outDir, distDir, buildId }
//     ) {
//       return {
//         '/': { page: '/' },
//         '/audits': { page: '/audits' },
//       }
//     },
// })

module.exports = {
    images:{
      domains: ['res.cloudinary.com'] 
    },
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/audits': { page: '/audits' },
      }
    },
}