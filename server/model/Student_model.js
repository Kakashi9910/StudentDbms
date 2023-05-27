import mongoose from 'mongoose';

const StudentSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
        },
        LastName:{
         type:String,
         required:true
        },
        RollNumber:{
           type:Number,
           required:true 
        },
        TotalNumber:{
            type:Number,
           required:true 
        }

})

const Student=mongoose.model('Student',StudentSchema);
export default Student;
