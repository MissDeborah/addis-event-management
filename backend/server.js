import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});