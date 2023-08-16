import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import videosRouter from './routes/videosRoutes.js';
import productsRouter from './routes/productsRoutes.js';
import commentsRouter from './routes/commentsRoutes.js';

const app = express();
const corsOption = {
    origin: "*"
}

app.use(bodyParser.json());
app.use(cors(corsOption));

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/videos', videosRouter);
apiRoutes.use('/products', productsRouter);
apiRoutes.use('/comments', commentsRouter);

export default app;