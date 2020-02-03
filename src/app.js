import express from 'express'
import morgan from 'morgan';
import cors from 'cors';

import postRoutes from './routes/post.router'

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', postRoutes);

export default app;