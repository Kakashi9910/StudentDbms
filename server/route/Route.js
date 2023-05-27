import express  from "express";
import { addStudentDetails,getStudentDetails} from "../controller/Student_Controller.js";
const route=express.Router();


route.post('/add',addStudentDetails);
route.get('/get',getStudentDetails);

export default route;