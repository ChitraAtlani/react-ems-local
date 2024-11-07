import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contetxt/AuthProvider'
import EmployeeDashboard from '../Dashboard/EmployeeDashboard'
const CreateTask = () => {

    //two way binding

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')    
    const [taskDescription, setTaskDescription] = useState('')    
    const [taskDate, setTaskDate] = useState('')    
    const [assignTo, setAssignTo] = useState('')    
    const [category, setCategory] = useState('')    

    const [newTask, setNewTask] = useState({})


    const submitHandler = (e) =>{
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                console.log("Milla")
                console.log(elem)
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1
            }
        })
        // localStorage.setItem('employees', JSON.stringify(data))
        setUserData(data)
        console.log(data);

        // setTaskTitle('')
        // setTaskDescription('')
        // setTaskDate('')
        // setAssignTo('')
        // setCategory('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded-md'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className='flex flex-wrap items-start justify-between w-full'>
        <div className='w-1/2'>
                    <div>
                        <h3 className='mb-0.5 text-sm text-gray-300'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input 
                        value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='flex flex-col items-start w-2/5'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea  
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='w-full px-5 py-3 mt-4 text-sm rounded bg-emerald-500 hover:bg-emerald-600'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
