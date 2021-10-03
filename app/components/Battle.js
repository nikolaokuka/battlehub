import React, { Component } from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Instructions() {
  return (
    <div className='instructions-container'>
      <h1 className='center-text header-lg'>
        Instructions
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter two Github users</h3>
          <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaFighterJet className='bg-light' color='#727272' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>See the winners</h3>
          <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
        </li>
      </ol>
    </div>
  )
}

class PlayerInput extends Component {
  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            id='username'
            className='input-light'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className='btn btn-dark'
            type='submit'
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

function PlayerPreview ({ label, username, onReset }) {
  return (
    <div className='column player'>
      <h3 className='player-label'>{label}</h3>
      <div className='row bg-light'>
        <div className='player-info'>
          <img
            className='avatar-small'
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a
            href={`https://github.com/${username}`}
            className='link'>
            {username}
          </a>
        </div>
        <button className='btn-clear flex-center' onClick={onReset}>
          <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
        </button>
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null
  }

  handleSubmit = (id, username) => {
    this.setState({
      [id]: username
    })
  }

  handleReset = (id) => {
    this.setState({
      [id]: null
    })
  }

  render() {
    const { playerOne, playerTwo } = this.state

    return (
      <>
        <Instructions />

        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne
              ? <PlayerPreview
                  label='Player One'
                  username={playerOne}
                  onReset={() => this.handleReset('playerOne')}
                />
              : <PlayerInput
                label='Player One'
                onSubmit={(username) => this.handleSubmit('playerOne', username)}
              />
            }
            {playerTwo
              ? <PlayerPreview
                  label='Player Two'
                  username={playerTwo}
                  onReset={() => this.handleReset('playerTwo')}
                />
              : <PlayerInput
                  label='Player Two'
                  onSubmit={(username) => this.handleSubmit('playerTwo', username)}
                />
            }
          </div>
        </div>
      </>
    )
  }
}
