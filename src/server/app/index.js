'use strict';

const express = require('express');
const path = require('path');
const stencil = require('@stencil/core/server');

const app = express();

const { wwwDir, logger } = stencil.initApp({
  app: app,
  configPath: path.resolve(__dirname, '../..')
});

app.use(express.static(wwwDir));

module.exports = app;