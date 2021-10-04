import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

export default class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  state = {
    hovering: false
  }

  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })

  render() {
    const { hovering } = this.state
    const { text, children } = this.props

    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        style={styles.container}>
          {hovering && <div style={styles.tooltip}>{text}</div>}
          {children}
      </div>
    )
  }
}
