import React from 'react'
import PropTypes from 'prop-types'

import { ThemeConsumer, ThemeProvider } from '../contexts/theme'

export default function Card ({ header, avatar, login, name, score, href, children }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
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
          <h2 className='repo-name center-text'>
            <a className='link' href={href}>
              {login ? login : name}
            </a>
          </h2>
          {children}
        </div>
      )}
    </ThemeConsumer>
  )
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string.isRequired,
}