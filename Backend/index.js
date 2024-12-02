import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express()
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true
    });
    console.log("connected to mongodb");
} catch (error) {
    console.log("Error:", error);
}

// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})