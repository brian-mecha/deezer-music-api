import express  from "express";
import routes from "./routes/routes.js";
import cors from "cors";
const app =  express();

app.use(cors());
app.options('*', cors());
app.use('/api/v1', routes);

export { app as app };
