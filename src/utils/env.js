//  Databse uri

export const MONGO_DB_COMPASS = "mongodb://127.0.0.1:27017/";


//  PORT

export const PORT = 3001;

//  JWT secrets

export const JWT_SECRET = "jwtisSecret";

if (!MONGO_DB_COMPASS) {
  throw new Error("MONGO_DB_COMPASS is missing in env");
}
