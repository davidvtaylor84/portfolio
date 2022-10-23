import React from 'react'
import './MyCV.css'
import davidvtaylor from './davidvtaylor.pdf'


const MyCV = () => {


  return (
    <div className='cv'>
      <iframe src={`${davidvtaylor}#view=fitH&toolbar=0&navpanes=0`}/>
    </div>
  )
}

export default MyCV

