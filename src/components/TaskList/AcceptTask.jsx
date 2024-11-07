import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data)
  return (
    <div className='flex-shrink-0 h-full w-[300px] text-sm p-5 bg-yellow-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='mt-2 text-sm'>{data.description}</p>
      <div className='flex justify-between mt-4'>
        <button className='px-2 py-1 text-sm bg-green-500'>Mark as Completed</button>
        <button className='px-2 py-1 text-sm bg-red-600'>Mark as failed</button>
      </div>
      </div>
        )
}

export default AcceptTask
