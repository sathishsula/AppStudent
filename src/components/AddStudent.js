//import React, { useSatee } from "react";
import React, { useState } from 'react';
import axios from 'axios';


export default function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sentData(event){
        
        event.preventDefault();
        const newStudent ={
            name,
            age,
            gender
        }

        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
            alert("Student Added")
        }).catch((error)=>{
            alert(error);
        })

        console.log(newStudent);
    }

    return (
        <div className="container">
            <form onSubmit={sentData}>
                <div className="form-group">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter student name" 
                    onChange={(event) =>{
                        setName(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter student age" 
                    onChange={(event) =>{
                        setAge(event.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter student gender" 
                    onChange={(event) =>{
                        setGender(event.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}