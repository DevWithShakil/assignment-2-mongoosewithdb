import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

//Application routes 
import userRoutes from './app/modules/book/book.route'

//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/books', userRoutes);

export default app;