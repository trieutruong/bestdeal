/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async rewrites() {
//     console.log("Rewrites called");
//     return [
//       {
//         source: "/product-detail",
//         destination: "http://localhost:3000/productdetail",
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// module.exports = {
//   // env: {
//   //   mongodburl: "Your MongoDB connection String",
//   // },
//   async redirects() {
//     return [
//       {
//         source: "/product-detail",
//         destination: "http://localhost:3000/productdetail",
//         permanent: true
//       },
//     ];
//   },
// };

module.exports = {
  // webpack: (config) => {
  //   // this is where you add custom configuration for webpack
  //   return config;
  // },

  // env: {
  //   // this is where you set env variables for the client side
  //   BASE_URL: process.env.BASE_URL,
  // },
  // pwa: {
  //   // this where you add progressive web app setting
  //   dest: "public",
  //   swSrc: "service-worker.js",
  // },

  async rewrites() {
    return [
      {
        source: "/thong-tin/:path*",
        destination: "/introduce", // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: "/thuong-hieu",
        destination: "/brand",
      },
    ];
  },
};
