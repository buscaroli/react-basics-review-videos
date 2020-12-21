import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'

export default class App extends Component {
  
  state = {
    videos: [],
    selected: null
  }

  onFormSubmit = async (text) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyAbOVlaijzBqArt7Y3TNiMJlleOVFciTR0',
          part: 'snippet',
          maxResults: 12,
          type: 'video',
          q: text
        }
      })
      console.log(response.data.items)
      this.setState({videos: response.data.items})
      
    } catch (e) {
      console.log('Error: ', e)
    }
    
    
  }
  
  render() {
    return (
      <div>
        <div className='ui segment bottom purple attached inverted very padded'>
          <h1 className='ui centered huge header'>
            Welcome to the YouTube API App!
          </h1>     
        </div >
        
        <div 
          className='ui container centered'
          style={{paddingBottom: '30px'}}>
          <SearchBar onFormSubmit={this.onFormSubmit}/>
        </div>
        <div 
          className='ui container centered grid'
          style={{minHeight: '60vh'}}>
          <div className='twelve wide column' style={{backgroundColor: 'lightblue'}}>
            <VideoPlayer />
          </div>
          <div className='four wide column' style={{backgroundColor: 'lightyellow'}}>
            <VideoList />
          </div>
        </div>
      </div>
      
    )
  }
}
