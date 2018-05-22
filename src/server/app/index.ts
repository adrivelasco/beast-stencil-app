'use strict';

import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as sanitized from 'express-sanitized';
import * as morgan from 'morgan';
import * as stencil from '@stencil/core/server';

import config from '../config';

class Main {
  public app: express.Application = express();

  constructor() {
    this.injectMiddlewares();
    this.routing();
  }

  private injectMiddlewares(): void {
    global.navigator = global.navigator || {};
    global.navigator.userAgent = global.navigator.userAgent || 'all';

    if (config.env === 'development') {
      this.app.use(morgan('dev'));
      this.app.enable('trust proxy');
    }

    this.app.disable('x-powered-by');
    this.app.use(cookieParser());
    this.app.use(sanitized());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(compression());

    const { wwwDir } = stencil.initApp({
      app: this.app,
      configPath: path.resolve(__dirname, '../../')
    });

    this.app.use(express.static(wwwDir));
  }

  private routing(): void {
    // App's routes here
  }
}

export default new Main().app;