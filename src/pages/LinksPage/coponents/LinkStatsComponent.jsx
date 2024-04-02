import React from 'react'

function LinkStatsComponent({data}) {
  return (
    <div className='p-4 bg-white text-color-grey-500 font-semibold flex flex-row justify-between '>
        <h1>{data.title}</h1>
        <h1>{data.value}</h1>
    </div>
  )
}

export default LinkStatsComponent