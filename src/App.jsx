import React, { useState } from 'react'
import './App.css'
function App() {
  const jobData=[
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Job 2",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
    {
      title:"Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
      date:"2022-01-01",
      time:"10:00"
    },
  ]
  const [jobs,setJobs]=useState([]);
  const [visibleJob, setVisibleJobs]=useState(5);
  const loadJObs=()=>{
    setJobs(jobData.slice(0,visibleJob));
  }
  function loadMOreJobs(){
    setVisibleJobs((previousJobs)=>previousJobs+5);
    setJobs(jobData.slice(0,visibleJob+5));
  }
  return (
    <>
    <div className="cards">
      <h1>Hackers data job</h1>
      {
        jobs.length>0 ? (
          <ul>
            {
              jobs.map((job)=>(
                <li key={job.title}>
                  <h3>{job.title}</h3>
                  <p>{job.date}</p>
                  <p>{job.time}</p>
                </li>
              ))
            }
          </ul>
        ): ""
      }
      {
        jobs.length>0 && jobs.length<jobData.length ? 
        <button onClick={loadMOreJobs}>Load more</button>: ""
      }
    </div>
    </>
  )
}

export default App