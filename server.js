const app = require('./app'); 
const mongoose = require('mongoose'); 


DATABASE='mongodb+srv://actual:actual123123@tour.h9z7qkp.mongodb.net/'
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((connection) => {
    console.log(`Connected to MongoDB: ${connection.connections[0].name}`);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  }); 
  


const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});