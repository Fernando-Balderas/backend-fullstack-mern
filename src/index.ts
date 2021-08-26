import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// imports the API from the routes/api folder
import router from "./routes/api/books";

// initializes the express application
const app = express();

// sets up CORS for Cross-Origin-Resource-Sharing
app.use(cors());
// converts API responses to JSON for easy use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// imports our database credentials (stored separately for security)
import config from "./config/keys";

// initializes our database using the credentials
mongoose.set("useFindAndModify", false);
mongoose
  //   .connect(db, () => {}, {useNewUrlParser: true})
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo Database connected"))
  .catch((err) => console.log(err));

// creates a route where we can interact with our API
app.use("/api/books", router);

// sets the port number depending if we are in production or development
const port = process.env.PORT || 5000;

// intializes the server and logs a message
app.listen(port, () => console.log(`Server running on port ${port}`));
