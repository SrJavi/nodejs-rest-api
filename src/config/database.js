import mongoose from 'mongoose'

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/node-rest-api',
         { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("CONNECTED TO DB!");
    } catch(e) {
        console.log(e);
    }
};

connect();