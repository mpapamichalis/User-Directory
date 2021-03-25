import React, {useState, useEffect } from "react";
import './App.css';
import Nav from "./components/Nav"
import Table from "./components/Table";
import API from "./utils/API";



function App() {
  const [ employeeData, setEmployeeData ] = useState([])

  useEffect(() => {
    API.getEmployeeData().then(res => {console.log(res.data.results)
      const data = res.data.results
      const parsedEmployeeData = data.map((row, i) => {
        return {
          id: i,
          name: `${row.name.first} ${row.name.last}`,
          phone: row.phone,
          email: row.email, 
          dob: new Date(row.dob.date).toLocaleDateString()

        }
      })
    setEmployeeData(parsedEmployeeData)})

  }, [])

  return (
    <div className="App">
      <Nav />
      <Table rows={employeeData}/>
      
    </div>
  );
}

export default App;