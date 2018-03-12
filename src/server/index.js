// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Webpack configuration
import webpackConfig from '../../webpack.config.babel';

// API
import blogApi from './api/blog';

// Helpers
import * as hbsHelper from '../lib/handlebars';

//Server Port
const port = 3000;

// Envirement
const isDevelmont = process.env.NODE_ENV !== 'production';

//Express app
const app = express();

// Public
app.use(express.static(path.join(__dirname, '../public')));

//Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

if (isDevelmont) {
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}

// API dispatch
app.use('/api/blog', blogApi);

// Sending all traffic to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

// Listen port
app.listen(port, err => {
  if (!err) {
    open(`http://localhost:${port}`);
  }
})