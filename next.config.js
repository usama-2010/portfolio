const path = require("path");

const nextConfig = {
  basePath: "",
  assetPrefix: "",
  // output: "export",
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
