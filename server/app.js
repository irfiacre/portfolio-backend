import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dontenv from 'dotenv';
import routes from './routes/routes';

dontenv.config();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((req, res) =>
  res.status(404).json({
    status: 404,
    error: ' PAGE NOT FOUND '
  })
);

export default app;
