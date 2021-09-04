import Header  from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
// import React from "react";


const App = () => {
  const [tasks,setTasks] =  useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day:'Sept 24 at 10:30pm',
            reminder:true,
        },
        {
            id: 2,
            text: 'Doctors Appointment',
            day:'Sept 24 at 10:30pm',
            reminder:true,
        },
        {
            id: 3,
            text: 'Doctors Appointment',
            day:'Sept 24 at 10:30pm',
            reminder:false,
        }
        
    ]
)
  return (
    <div className="container">
      <h1>
        <Header/>
        <Tasks tasks={tasks}/>
      </h1>
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1> hello from Class component</h1>
//   }
// }

export default App;
