import React, { Component } from 'react'
import PropTypes from 'prop-types'

function LanguagesNav ({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={selected === language ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
}

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
    const { selected } = this.state

    return (
      <>
        <LanguagesNav
          selected={selected}
          onUpdateLanguage={this.updateLanguage}
        />
      </>
    )
  }
}
