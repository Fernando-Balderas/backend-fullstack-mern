import { CorsOptions } from "cors";

const allowedOrigins = ["http://example1.com", "http://example2.com"];

const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  preflightContinue: false,
};

// const corsOptions: CorsOptions = {
//   origin: function (origin: string, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

export default corsOptions;
