const mongoose = require('mongoose')

const MONGODB_URI = process.env

exports.connect = ()=>{
    mongoose.connect(MONGODB_URI, )
    .then(()=>{
        console.log(`Database connected successfully!!`)
    })
    .catch((error)=>{
        console.log(`DB connection failed:`);
        console.log(error);
        process.exit(1);

    })
}