import React from 'react'
import './SideProjects.css';


const SideProjects = () => {
  return (
    <div className='sidediv'>
        <div className='video'>
            <iframe className='video' src="https://player.vimeo.com/video/781540486?h=1decba7602" title="YouTube video player" border="0px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='text'>
            <h2>Firesale</h2>
            <p>A text-based story with a dialogue box used to advance the narrative.</p>
            <h3>Description</h3>
            <p>This was built using React in a few hours and demonstrates use of state. One can delete the dialogue by clicking on it and turn the story back a step at a time. This function relates to the narrative's themes.</p>
            <p>This app is online and can be viewed <a href="https://firesale.vercel.app/">here.</a></p>
        </div>
    </div>
  )
}

export default SideProjects