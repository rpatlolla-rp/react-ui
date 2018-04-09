import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import scriptjs from 'scriptjs'
import { parseArgs } from '@rentpath/react-ui-utils'
import getDisplayName from './utils/getDisplayName'

const API_BASE_URL = 'https://maps.googleapis.com/maps/api/js'

export default function(BaseComponent) {
  class Container extends PureComponent {
    static displayName = `withGoogleScript(${getDisplayName(BaseComponent)})`

    static propTypes = {
      apiKey: PropTypes.string.isRequired,
      version: PropTypes.string,
      libraries: PropTypes.arrayOf(
        PropTypes.string,
      ),
      spinner: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.object,
      ]),
    }

    static defaultProps = {
      libraries: [],
      version: '3',
    }

    state = {
      loaded: false,
      spinner: this.props.spinner,
    }

    componentDidMount() {
      if (this.isInitialized) {
        this.scriptLoaded()
        return
      }
      this.loadScript()
    }

    get isInitialized() {
      return !!(window.google && window.google.maps)
    }

    get spinner() {
      const { spinner, loaded } = this.state
      const props = { key: 'map-spinner', loading: !loaded }

      if (spinner) {
        if (React.isValidElement(spinner)) return React.cloneElement(spinner, props)
        return React.createElement(...parseArgs(spinner, 'div', props))
      }

      return null
    }

    @autobind
    scriptLoaded() {
      this.setState({ loaded: true })
    }

    loadScript() {
      const { apiKey, libraries, version } = this.props
      const url = `${API_BASE_URL}?key=${apiKey}&version=${version}&libraries=${libraries.join()}`
      scriptjs(url, this.scriptLoaded)
    }

    render() {
      const { loaded } = this.state
      const {
        spinner,
        apiKey,
        libraries,
        version,
        ...rest
      } = this.props

      return [
        this.spinner,
        loaded ? <BaseComponent key="google-map" {...rest} /> : null,
      ]
    }
  }

  return Container
}