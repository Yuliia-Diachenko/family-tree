import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoDB();
    startServer();
        } catch (error) {
            console.error(error);
            throw error;
        }
};

bootstrap();
