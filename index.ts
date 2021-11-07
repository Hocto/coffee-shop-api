import express, { Request, Response } from 'express';
import { controller as coffeeController} from './src/controller';
import cors from "cors";
import morgan from "morgan";

const port = process.env.PORT || 8000;
const app = express();
app.use(cors()); 
app.use(morgan("tiny"));
app.use('/api', coffeeController);

app.listen(port, () => {
  console.log(`Coffee shop application is running on port ${port}.`);
});