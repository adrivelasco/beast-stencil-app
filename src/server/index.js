'use strict';

require('dotenv').config();

const app = require('./app');
const port = 3030;

app.listen(port, () => console.log(`Nodejs server listening on port ${port}. (${process.env.NODE_ENV})`));