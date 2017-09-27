import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends Component {
  static propTypes = {
    layer: PropTypes.object,
  }

  static contextTypes = {
    map: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)

    const { map } = this.context
    const { layer } = this.props

    map.addLayer(layer)
  }

  render() {
    return null
  }
}
