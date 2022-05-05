import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


import carsRouter from './src/routes/cars.js';



const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



dotenv.config();



mongoose.connect(`mongodb+srv://${process.env.AUTO_DB_USER}:${process.env.AUTO_DB_PASS}@automobile.ufv02.mongodb.net/Automobile?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connection to db established"));


app.get('/', (req, res) => {
    res.send('Hello from GCI Application for Cars in Mongo!');
});


app.use('/cars', carsRouter);


// error handling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

