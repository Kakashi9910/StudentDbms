
import { useState } from 'react';
import { SaveStudentDetails } from '../service/Api';
export default function FetchStudentDetails({setStudentAddFlag,studentAddFlag}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNumber, setRollNumber] = useState();
  const [totalNumber,setTotalNumber]=useState()


  const handleSubmit = async(event) => {
    event.preventDefault();
    let Studentdata={
        FirstName:firstName,
        LastName:lastName,
        RollNumber:rollNumber,
        TotalNumber:totalNumber
    }
    setFirstName('');
    setLastName('');
    setRollNumber({});
    setTotalNumber({})
    console.log(Studentdata);
    setStudentAddFlag(!studentAddFlag);
    await SaveStudentDetails(Studentdata);
   
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
       
      <br />
      <br />
      <input
        type="number"
        id="rollNumber"
        name="rollNumber"
        value={rollNumber}
        placeholder="Roll Number"
        onChange={(event) => {
          setRollNumber(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        id="totalNumber"
        name="totalNumber"
        value={totalNumber}
        placeholder="Total number"
        onChange={(event) => {
          setTotalNumber(event.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
     
      <br />
      <br />
{/* 
      <h2>{message}</h2> */}
    </form>
  );
}
