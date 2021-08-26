export type TConfig = {
  mongoURI: string,
  secretOrKey: string,
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config: TConfig = {
  mongoURI: process.env.MONGO_URI ? process.env.MONGO_URI : '',
  secretOrKey: process.env.SECRET_OR_KEY ? process.env.SECRET_OR_KEY : '',
}

export default config;