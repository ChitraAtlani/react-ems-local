import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] text-sm p-5 bg-yellow-400 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h3 className='px-3 py-1 text-sm bg-red-600 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
      <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo neque, molestiae itaque adipisci laborum voluptatibus ipsa aut explicabo necessitatibus fugit minus magni officia! Molestiae quaerat laboriosam assumenda eos veritatis?</p>
      <div className='mt-2'>
        <button className='w-full px-2 py-1 text-xs font-medium bg-red-500 rounded'>Failed</button>
      </div>
      </div>
  )
}

export default FailedTask
