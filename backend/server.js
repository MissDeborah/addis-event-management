import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.route.js';
import ContactRoutes from './routes/Contact.route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

connectDB();

app.use('/api/users', userRoutes);

app.use('/api', ContactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});