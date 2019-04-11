const routes = require("next-routes");

// Setup router
module.exports = routes()
  .add("index", "/")
  .add("join-us", "/nous-rejoindre")
  .add("offer", "/nous-rejoindre/:slug");
