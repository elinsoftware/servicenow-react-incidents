import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [incidents, setIncidents] = useState([])

  useEffect(()=>{
     axios.get('/api/now/table/incident?sysparm_limit=10')
          .then(res => {
            setIncidents(res.data.result)
          })
  },[])

  const Incidents = () => {
    return (
      <ul>
        {incidents.map( (i)=>(<li key={i.sys_id}>{i.number}: {i.short_description}</li>)) }
      </ul>
    )
  }

  return (
    <div>
      <h2>Hello, ServiceNow!</h2>
      <Incidents/>
    </div>
  )
}

export default App;
