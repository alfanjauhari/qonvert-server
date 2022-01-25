import { CorsOptions } from 'cors';

const corsOrigin = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split('||')
  : '*';

const corsConfig: CorsOptions = {
  credentials: true,
  allowedHeaders: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  origin: corsOrigin,
};

export default corsConfig;
