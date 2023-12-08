import mongoose from "mongoose";


let  isConnected = false
//conection Mongodb
export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
         console.log('Mongodb is already connceted');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompt',
            useNewUrlParser:true,
            useUnifedTopology:true,
        })
        isConnected = true
        console.log('MongoDb connected');
    } catch (error) {
        console.log(error);
    }
}