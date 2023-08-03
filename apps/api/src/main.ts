import express from 'express';
import * as path from 'path';

import { BACKEND_PORT } from '@money-manager/config';
import { APIResponse, API_URL } from '@money-manager/types';

import { configureRoutes } from './app/router';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

configureRoutes(app);

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as APIResponse);
});

const server = app.listen(BACKEND_PORT, () => {
  console.log(`Listening at http://localhost:${BACKEND_PORT}/api`);
});
server.on('error', console.error);
