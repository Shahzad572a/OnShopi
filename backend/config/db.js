import mongoose from 'mongoose';

const connDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex:true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.error(`Error: ${error.message}`.red.underline)
        process.exit(1)
    }
}

export default connDB