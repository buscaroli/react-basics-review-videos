import React from 'react'
import Spinner from './Spinner'

function VideoPlayer(props) {
  
  const checkVideo = () => {
    if (!props.video) 
      return <Spinner message='Enter a Search Term to find a video'/>
    
    return(
      <iframe 
        src={props.video} 
        allowfullscreen='allowfullscreen' 
        title='Generic title'
        style={{width: '100%', height: '100%'}}>
      </iframe>
    )
  }

  return (
    <>
      {checkVideo()}
    </>
      
  )
}

export default VideoPlayer

