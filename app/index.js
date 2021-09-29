import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default class App extends React.Component {
  render() {
    return (
      <h1>Github Battle</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)