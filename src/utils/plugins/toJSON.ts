/**
 * A mongoose schema plugin which applies the following in the toJSON transform call:
 *  - removes __v, createdAt, updatedAt, and any path that has private: true
 *  - replaces _id with id
*/
// import { Document, Schema } from "mongoose";
// import IUser from "../../interfaces/user";

// type TRet = {
//   [key: string]: TRet;
// } & Document;

// type TFnDeleteAtPath = (
//   obj: TRet & { [key: string]: TRet },
//   path: string[],
//   index: number
// ) => void;

// type TPath = {
//   options: any;
// };

// type TSchema = {
//   options?: any;
//   paths?: TPath[] & { [key: string]: TPath };
// } & Schema<IUser>;

// type TFnTransform = (doc: Document, ret: TRet, options: any) => void;

// const deleteAtPath: TFnDeleteAtPath = (obj, path, index) => {
//   if (index === path.length - 1) {
//     delete obj[path[index]];
//     return;
//   }
//   deleteAtPath(obj[path[index]], path, index + 1);
// };

// const toJSON = (schema: Schema<IUser>) => {
//   let transform: TFnTransform;
//   if (schema.options.toJSON && schema.options.toJSON.transform) {
//     transform = schema.options.toJSON.transform;
//   }

//   schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
//     transform(doc: Document, ret: TRet, options: any) {
//       Object.keys(schema.paths).forEach((path) => {
//         if (schema.paths[path].options && schema.paths[path].options.private) {
//           deleteAtPath(ret, path.split("."), 0);
//         }
//       });

//       ret.id = ret._id.toString();
//       delete ret._id;
//       delete ret.__v;
//       delete ret.createdAt;
//       delete ret.updatedAt;
//       if (transform) {
//         return transform(doc, ret, options);
//       }
//     },
//   });
// };

// export default toJSON;
