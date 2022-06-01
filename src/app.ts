import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();
const port = process.env.PORT || 3333;

app
  .use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }))
  .use(express.json())
  .use(router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`👍 | Server is running on ${port} `));
