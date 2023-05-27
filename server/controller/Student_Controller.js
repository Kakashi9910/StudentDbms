import Student from "../model/Student_model.js"

export const addStudentDetails=async(request,response)=>{
    try{
        let exist=await Student.findOne({RollNumber:request.body.RollNumber});
        if(exist){
            response.status(200).json({msg:"Student already exist with rollnumber "});
            return
        }
        const newStudent=new Student(request.body);
        await newStudent.save();
         response.status(200).json(newStudent);

    }
    catch(error){
         return response.status(500).json(error.message);
    }
}

export const getStudentDetails=async(request,response)=>{
    try{
       let student=await Student.find();
       return response.status(200).json(student);
    }
    catch(error){
       response.status(500).json(error.message);
    }
}