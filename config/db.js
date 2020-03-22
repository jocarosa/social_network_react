const mongoose = require('mongoose');
const config  = require ('config');
const db = config.get('mongoURI');

const connectDB = async () =>{

     mongoose.connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true
       }).then(()=>console.log('Mongodb conected...'))
       .catch(err=>console.log('error conecting.'));
      
 
}

 module.exports = connectDB;
