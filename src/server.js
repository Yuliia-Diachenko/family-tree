import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import  familyRouter  from './routers/family.js';
import { errorHandler } from './midllewares/errorHandler.js';
import { notFoundHandler } from './midllewares/notFoundHandler.js';
import { swaggerDocs } from './midllewares/swaggerDocs.js';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(familyRouter);
  app.use('/api-docs', swaggerDocs());
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
