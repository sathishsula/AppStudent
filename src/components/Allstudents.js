import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Allstudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student")
        .then((res) => {
          //console.log(res.data);
          setStudents(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    getStudents();
  }, []);

  return (
    // <div className="container">
    //   <h3>All Students</h3>
    //   <div className="card-container">
    //     {students.map((student) => (
    //       <div key={student._id} className="card">
    //         <h4>Name: {student.name}</h4>
    //         <p>Age: {student.age}</p>
    //         <p>Gender: {student.gender}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="container">
      <h3>All Students</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
