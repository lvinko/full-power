const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
