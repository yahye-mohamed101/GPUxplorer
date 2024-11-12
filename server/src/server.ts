const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import sequelize  from './config/connection.js';


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use('/api', routes);

app.use(express.static('../client/dist'));


sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});