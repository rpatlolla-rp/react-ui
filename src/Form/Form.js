import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'
import serialize from 'form-serialize'

@themed('Form', {
  pure: true,
})

export default class Form extends Component {
  static propTypes = {
    /**
     * The theme to apply.
     */
    theme: PropTypes.object,

    /**
     * The form action.
     */
    action: PropTypes.string,

    /**
     * The form method.
     */
    method: PropTypes.string,

    /**
     * Enables browser validation when false.
     */
    noValidate: PropTypes.bool,

    /**
     * Submit callback.
     */
    onSubmit: PropTypes.func,

    /**
     * Serializes form data when true.
     */
    serialize: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    action: '#',
    method: 'POST',
    noValidate: true,
  }

  onSubmit = event => {
    event.preventDefault()

    if (this.props.onSubmit) {
      const args = [event]

      if (this.props.serialize) {
        args.push(serialize(event.target, { hash: true }))
      }

      this.props.onSubmit(...args)
    }
  }

  render() {
    const {
      theme,
      className,
      ...props
    } = this.props

    return (
      <form
        {...props}
        onSubmit={this.onSubmit}
        className={classNames(
          className,
          theme.Form,
        )}
      />
    )
  }
}
