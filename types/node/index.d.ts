declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      JWT_TOKEN?: string;
      JWT_REFRESH_TOKEN?: string;
      CORS_ORIGIN?: string;
    }
  }
}

export {};
