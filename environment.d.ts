// https://stackoverflow.com/questions/45194598/using-process-env-in-typescript

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
    }
  }
}

export {};
