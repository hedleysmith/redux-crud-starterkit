const config = require('../config/');
const express = require('express');
const app = express();
const env = process.env.NODE_ENV || 'development';

// Development specific config.
if (config.env === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../build/webpack.config');
  const compiler = webpack(webpackConfig);

  // [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
  // serves a compiled JS bundle in-memory, avoiding writing to disk it also
  // watches for file changes and updates the file bundle.
  const webpackDevMiddleware = require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  // [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
  // injects code into the compiled bundle as files change allowing
  // 'hot reloading' AKA 'hot module replacement (HMR)'. This means no page
  // reload is required during development.
  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(compiler));
}

// Routes.
// TODO: Implement simple isomorphic rendering to respond to requests with a
// rendered HTML page:
// * http://stackoverflow.com/questions/28553904/client-routing-using-react-router-and-server-side-routing
// * https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
app.use('/', express.static(`${__dirname}/../public`));
app.use('/items', express.static(`${__dirname}/../public/index.html`));

app.listen(config.SERVER_PORT, () => {
  console.log(`Server started at http://localhost:${config.SERVER_PORT}`);
});
