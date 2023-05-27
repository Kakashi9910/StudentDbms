import axios from 'axios';

const url='http://localhost:8000';


export const SaveStudentDetails=async(Studentdata)=>{
try{
     await axios.post(`${url}/add`,Studentdata);
}
catch(error){
      console.log("Error in saving details in mongoDb",error);
}
}

export const getStudent=async()=>{
    try{
        let response=await axios.get(`${url}/get`);
        return response.data;
    }
    catch(error){
        console.log('Error in getting students details',error.message)
    }
}