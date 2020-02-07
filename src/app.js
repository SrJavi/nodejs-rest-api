import express from 'express'
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes'

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', routes);

export default app;