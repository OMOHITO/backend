import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "12kb"})) //to receive data in json format
app.use(express.urlencoded({extended: true, limit: "12kb"})) // receive data from url
app.use(express.static("public")) //receive images, pdf 
app.use(cookieParser()) 

export { app }