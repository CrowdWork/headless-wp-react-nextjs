const express = require("express");
const next = require("next");

// Import middleware
const routes = require("./routes");

// Setup app
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  // Create server
  const server = express();

  // Use our handler for requests
  server.use(handler);

  // Don't remove. Important for the server t work. Default route.
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Get current port
  const port = process.env.PORT || 8081;

  // Error check
  server.listen(port, err => {
    if (err) {
      throw err;
    }

    // Here we start
    console.log(`> Ready on port ${port}...`);
  });
});
