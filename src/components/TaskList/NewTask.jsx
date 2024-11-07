import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] text-sm p-5 bg-green-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='mt-2 text-sm'>{data.description}</p>
      <div className='mt-4'>
        <button className='px-2 py-1 text-xs font-medium bg-blue-500 rounded' >Accept Task</button>
      </div>
      </div>
  )
}

export default NewTask
