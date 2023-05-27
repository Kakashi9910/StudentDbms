import React, { useState, useMemo } from 'react';
import Pagination from './pagination';
import data from './data/Data.json';
import FetchStudentDetails from './component/FetchStudentDetails';
import './style.scss';
import { useEffect } from 'react';
import { getStudent } from './service/Api';

let PageSize = 10;

export default function App() {
  const [studentAddFlag,setStudentAddFlag]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);

   const[newData,setNewData]=useState([]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return newData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNumber, setRollNumber] = useState();
  const [totalNumber,setTotalNumber]=useState()
useEffect(()=>{
  const getStudentDetails=async()=>{
          let students=await getStudent();
          setNewData(students);
  }
  getStudentDetails();
},[studentAddFlag]);
  return (
    <>
     <FetchStudentDetails 
      setStudentAddFlag={setStudentAddFlag}
      studentAddFlag={studentAddFlag}/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>TOTAL Marks</th>
           
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.RollNumber}</td>
                <td>{item.TotalNumber}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
