import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RequiredField from './RequiredField'

export default class Name extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    name: 'name',
    placeholder: 'Name',
  }

  render() {
    return (
      <RequiredField {...this.props} />
    )
  }
}
