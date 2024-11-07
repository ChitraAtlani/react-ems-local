import React from 'react'
import Header from '../others/Header'
import TasklistNumbers from '../others/TasklistNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      {/* change user acting as two way binding */}
      <Header changeUser={props.changeUser} data={props.data}/> 
      <TasklistNumbers data={props.data}/>
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
