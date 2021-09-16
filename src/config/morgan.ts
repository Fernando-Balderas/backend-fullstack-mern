import { ServerResponse } from "http";
import morgan from "morgan";
import config from "./config";
import logger from "./logger";

type TResponse = {
  locals: any;
} & ServerResponse;


morgan.token("message", (req, res: TResponse) => res.locals.errorMessage || "");

const getIpFormat = () =>
  config.nodeEnv === "production" ? ":remote-addr - " : "";
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const successHandler = morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) },
});

export default {
  successHandler,
  errorHandler,
};
