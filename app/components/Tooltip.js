import React from 'react'
import PropTypes from 'prop-types'
import withHover from './withHover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '29px',
    left: '27px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

function Tooltip ({ text, children, hovering }) {
  return (
    <div style={styles.container}>
      {hovering && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired,
}

export default withHover(Tooltip)