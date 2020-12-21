import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    data: ''
  }

  onTextSubmit = (e) => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.data)
  }

  render() {
    return (
      <form
        onSubmit={this.onTextSubmit}
        className="ui form" 
        style={{paddingTop: '30px'}}>
        <div className="field">          
          <input
            onChange={e => this.setState({data: e.target.value})}
            value={this.state.data} 
            type="text" 
            placeholder='Search terms in here'/>          
        </div>
      </form>
    )
  }
}
