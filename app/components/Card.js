import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ header, avatar, login, name, score, href, children }) {
  return (
    <div className='card bg-light'>
      <h4 className='header-lg center-text'>
        {header}
      </h4>
      <img
        className='avatar'
        src={avatar}
        alt={`Avatar for ${name}`}
      />
      {score &&
        <h4 className='center-text'>
          Score: {score}
        </h4>
      }
      <h2 className='center-text'>
        <a className='link' href={href}>
          {login ? login : name}
        </a>
      </h2>
      {children}
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.string,
  href: PropTypes.string.isRequired,
}