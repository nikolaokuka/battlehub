import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

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
    selected: 'All',
    repos: {},
    error: null
  }

  componentDidMount() {
    this.updateLanguage(this.state.selected)
  }

  updateLanguage = (selected) => {
    this.setState({
      selected,
      error: null
    })

    if (!this.state.repos[selected]) {
      fetchPopularRepos(selected)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selected]: data
            },
            error: null
          }))
        })
        .catch(({ message }) => {
          console.warn(message)

          this.setState({
            error: 'Error fetching the repos.'
          })
        })
    }
  }

  isLoading = () => {
    const { selected, repos, error } = this.state
    return !repos[selected] && !error
  }

  render() {
    const { selected, repos, error } = this.state

    return (
      <>
        <LanguagesNav
          selected={selected}
          onUpdateLanguage={this.updateLanguage}
        />
        {error && <p className='center-text error-msg'>{error}</p>}
        {this.isLoading() && <p className='center-text'>Loading...</p>}
        {repos[selected] && <pre>{JSON.stringify(repos[selected], null, 2)}</pre>}
      </>
    )
  }
}
