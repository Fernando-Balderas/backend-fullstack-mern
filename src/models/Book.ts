import { Schema, model, Document } from "mongoose";
import IBook from "../interfaces/book";

type TBook = {} & IBook & Document;

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model<TBook>("Book", BookSchema);
