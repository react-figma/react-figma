var configure = require("react-figma-webpack-config");
module.exports = configure({
  resolve: {
    alias: {
      "react-native$": "react-figma"
    }
  }
});
