import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Popular from './components/Popular'
import Battle from './components/Battle'

import { ThemeProvider } from './contexts/theme'

class App extends Component {
  state = {
    theme: 'light',
    toogleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state.theme}>
        <div className='container'>
          <Battle />
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)