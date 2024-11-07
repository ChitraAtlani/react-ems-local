import React, { useContext } from 'react'
import { AuthContext } from '../../contetxt/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)
  console.log( userData)
  
  return (
    //hieght
    <div className='p-5 bg-[#1c1c1c] rounded mt-5 h-[48%] '> 
        <div className='flex justify-between px-4 py-2 mb-2 bg-red-400 rounded'>
          <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
          <h3 className='w-1/5 text-lg font-medium '>Task</h3>
          <h5 className='w-1/5 text-lg font-medium '>Active</h5>
          <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
          <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem, idx){
          return <div key={idx} className='flex justify-between px-4 py-2 mb-2 border-2 rounded border-emerald-500'>
          <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
          <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskCount.new_task}</h3>
          <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCount.active}</h5>
          <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskCount.completed}</h5>
          <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })}
      </div>

      
    </div>
  )
}

export default AllTask
