'use strict';

import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import config from './config';

app.listen(config.port, () =>
  console.log(`Nodejs server listening on port ${config.port}. (${config.env})`)
);