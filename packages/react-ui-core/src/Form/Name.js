import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class Name extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    name: 'name',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
