const fs = require('fs'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE; 
console.log(DB); 
const uri = 'mongodb+srv://actual:actual123123@tour.h9z7qkp.mongodb.net/'; // Define your MongoDB URI here

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

console.log(__dirname);
//   read file in sync version C:\Users\91969\Dropbox\PC\Desktop\NodeJS\Natours\dev-data\data\tours-simple.json
const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8');

// import data in database 
const importData = async () => {
    try {
      await Tour.create(tours);
      
    } catch (err) {
      console.log("Error found in import-dev-data and in importData:", err);
    }
    process.exit() ; 
  } 
// delete all data from the collections 
const deleteData = async () =>{
    try {
      await Tour.deleteMany(tours); 
      console.log("Delete data successfully"); 
      } catch (err){
          console.log("err found in import-dev-data and in importData", err);
      }
    process.exit() ;
  } ;

console.log(process.argv) ; 

// if (process.argv[2]==='--import'){
//     console.log("asdadasds")
//     importData() ;
// }
// else if (process.argv[2]==='--delete'){
//     deleteData() ;
// }
importData() 