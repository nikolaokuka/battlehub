import React, { Component } from 'react'

export default class Popular extends Component {
  state = {
    selected: 'All'
  }

  updateLanguage = (selected) => {
    this.setState({
      selected
    })
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={this.state.selected === language ? { color: 'rgb(187, 46, 31)' } : null}
              onClick={() => this.updateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
