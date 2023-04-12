import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
// console.log(dotenv)
// require('dot-env').config();

dotenv.config();


import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.use('/', (req, res)=> {
//   res.send('<h1>Yeah I am the memories api</h1>')
// })
app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://saheedibrahimdamilare:rasheedat@cluster0.8ubxchd.mongodb.net/test"
const PORT = process.env.PORT || 5000; 
//const URI = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
