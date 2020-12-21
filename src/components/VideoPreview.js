import React from 'react'

function VideoPreview(props) {

  const onVideoSelect = (e) => {
    e.preventDefault()
    
    props.onVideoSelect(props.index)
  }

  return (
    <div
      onClick={onVideoSelect}
      key={props.itemKey} 
      className="ui link card">
      <div className="image">
        <img 
          src={props.img} 
          alt={props.alt || 'No description'}/>
      </div>
      <div className="content">
        <div className="description">
          <h4 className='small sub header'>
            {props.title.slice(0, 32) + '...'}
          </h4>
        </div>
      </div>  
    </div>
  )
}

export default VideoPreview
