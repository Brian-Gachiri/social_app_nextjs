import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URLnot found");
    if(isConnected) return console.log('Already connnected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connnected to MongoDB')
    }catch(error){
        console.log(error)
    }
}