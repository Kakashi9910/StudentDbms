import mongoose from 'mongoose';

const Connection=async()=>{
const URL='mongodb://Palash:goku@ac-onjmfpa-shard-00-00.ifrglmq.mongodb.net:27017,ac-onjmfpa-shard-00-01.ifrglmq.mongodb.net:27017,ac-onjmfpa-shard-00-02.ifrglmq.mongodb.net:27017/?ssl=true&replicaSet=atlas-2trafs-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
          await mongoose.connect(URL,{useUnifiedTopology:true});
          console.log("database connected successfully");
    }
    catch(error){
        console.log("Error in connecting to database",error.message);
    }
}

export default Connection;