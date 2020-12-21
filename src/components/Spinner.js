import React from 'react'


function Spinner(props) {
  return (
    <div class="ui">
      <div class="ui active inverted dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
</div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner
