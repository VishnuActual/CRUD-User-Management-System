const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = require('./app');



const DB = process.env.DATABASE; 
const uri = 'mongodb+srv://actual:actual123123@tour.h9z7qkp.mongodb.net/'; // Define your MongoDB URI here

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });





const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

