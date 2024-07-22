
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js'
import autRoutes from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL
)
  .then(() => {
    console.log("mongoDb is connected ");
  }).catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());


app.listen(3000, () => {
  console.log("server is running on port 3000");
});


app.use('/api/user', userRoutes);
app.use('/api/auth', autRoutes);