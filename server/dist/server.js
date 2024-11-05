import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
db;
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../../client/dist')));
// app.get('*', (_req, res) => {
//  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
// });
// }
app.use(routes);
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
