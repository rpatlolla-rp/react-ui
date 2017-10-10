import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Text extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    tag: 'div',
    theme: {},
  }

  render() {
    const {
      tag: Tag,
      theme,
      className,
      ...props
    } = this.props

    return (
      <Tag
        {...props}
        className={
          classnames(
            className,
            theme.Text,
          )
        }
      />
    )
  }
}
