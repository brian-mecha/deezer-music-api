import express  from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";

dotenv.config();
const app =  express();
const PORT = 3001;
app.use(cors());
app.use(helmet());
app.use(compression({ filter: compress }))
app.options('*', cors());
app.use('/api/v1', routes);


function compress(req, res) {
    if (req.headers['x-no-compression']) {
      return false
    }
   
    return compression.filter(req, res)
  }

const start = async () => {
    app.listen(PORT, () => {
        console.log(` Deezer API 🎷 running on port ${PORT}...`)
    });   
}

start();
