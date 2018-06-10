import React from 'react'

const Loader = ({isLoading}) => {
  if (!isLoading)
    return null
  return (
    <div className='text-center' style={{marginTop: 30}}>
      Loading...
    </div>
  )
}

export default Loader
