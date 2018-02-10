const express = require('express');
const path = require('path');

const PORT = 5000;

const app = express();

// webpack-hot-middleware
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// webpackServer
// Creating webpackCompiler that instantiate webpack and adding it as a express middleware
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    color: true,
    chunks: true,
    errorOnly: true
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}))


app.use('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'))
});

app.listen(PORT, () => {
  console.log(`We're live on PORT: ${PORT}`);  
})