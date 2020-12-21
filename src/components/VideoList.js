import React from 'react'
import VideoPreview from './VideoPreview'

const VideoList = (props) => {
  
  const onVideoSelect = (data) => {
    props.onVideoSelect(data)
  }

  const vidArray = props.videoList.map((vid, index) =>
    <VideoPreview 
      img={vid.snippet.thumbnails.medium.url}
      itemKey={vid.id.videoId}
      alt={vid.snippet.description}
      title={vid.snippet.title}
      index={index}
      onVideoSelect={onVideoSelect}
    />
  )

  return (
    <div>
      {vidArray}
    </div>
  )
}

export default VideoList
