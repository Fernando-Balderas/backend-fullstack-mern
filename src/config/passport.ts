import {
  Strategy,
  StrategyOptions,
  ExtractJwt,
  VerifyCallback,
} from "passport-jwt";
import config from "./config";
import { tokenTypes } from "../utils/constants";
import { User } from "../models";

type TPayload = {
  type: string;
  sub: string;
};

type TFnJwtVerify = (
  payload: TPayload,
  done: any
) => Promise<VerifyCallback | undefined>;

const jwtOptions: StrategyOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify: TFnJwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error("Invalid token type");
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new Strategy(jwtOptions, jwtVerify);

export { jwtStrategy };
