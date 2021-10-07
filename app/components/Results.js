import React, { Component } from 'react'
import { battle } from '../utils/api'
import queryString from 'query-string'

import Card from './Card'
import ProfileList from './ProfileList'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default class Results extends Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }

  componentDidMount() {
    const { playerOne, playerTwo } = queryString.parse(this.props.location.search)

    battle([ playerOne, playerTwo ])
      .then(([ winner, loser ]) => {
        this.setState({
          winner,
          loser,
          error: null,
          loading: false
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        })
      })
  }

  render() {
    const { winner, loser, error, loading } = this.state

    if (loading) {
      return <Loading text='Battling' />
    }

    if (error) {
      return <p className='center-text error-msg'>{error}</p>
    }

    return (
      <>
        <div className='grid space-around container-sm'>
          <Card
            header={winner.score === loser.score ? 'Tie' : 'Winner'}
            avatar={winner.profile.avatar_url}
            login={winner.profile.login}
            score={winner.score.toLocaleString()}
            href={winner.profile.html_url}
          >
            <ProfileList profile={winner.profile} />
          </Card>

          <Card
            header={winner.score === loser.score ? 'Tie' : 'Loser'}
            avatar={loser.profile.avatar_url}
            name={loser.profile.login}
            score={loser.score.toLocaleString()}
            href={loser.profile.html_url}
          >
            <ProfileList profile={loser.profile} />
          </Card>
        </div>
        <Link
          className='btn btn-dark btn-space'
          to='/battle'
        >
          Reset
        </Link>
      </>
    )
  }
}
