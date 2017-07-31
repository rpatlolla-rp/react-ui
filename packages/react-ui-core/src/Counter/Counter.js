import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(count) {
    this.props.handleClick(count)
    this.setState({
      count,
    })
  }
  render() {
    const { count } = this.state
    const { theme, label, leftUnit, rightUnit, id } = this.props
    return (
      <div id={id} className={theme.container}>
        <div className={theme.label}>
          {label}
        </div>
        <div className={theme.componentContainer}>
          <span
            onClick={() => this.handleClick(this.state.count + 1)}
            className={classNames('leftUnit', theme.contentInnards, theme.shape)}
          >
            {this.props.leftOperator}
          </span>
          <span
            className={classNames(theme.contentInnards, theme.count)}
          >{`${leftUnit} ${count} ${rightUnit}`}</span>
          <span
            onClick={() => this.handleClick(this.state.count - 1)}
            className={classNames('rightUnit', theme.contentInnards, theme.shape)}
          >
            {this.props.rightOperator}
          </span>
        </div>
      </div>
    )
  }
}

Counter.defaultProps = {
  theme: {},
  count: 1,
  leftUnit: '',
  rightUnit: '',
  handleClick: () => {
    alert('please add rightOperatorClick handler function')
  },
  leftOperator: <span>-</span>,
  righttOperator: <span>+</span>,
}

Counter.propTypes = {
  leftOperator: PropTypes.element,
  righttOperator: PropTypes.element,
  theme: PropTypes.object,
  count: PropTypes.number,
  leftUnit: PropTypes.string,
  rightUnit: PropTypes.string,
  handleClick: PropTypes.func,
}
