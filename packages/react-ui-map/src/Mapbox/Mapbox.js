import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class Mapbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    token: PropTypes.string,
    center: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    flyOnCenterChange: PropTypes.bool,
    style: PropTypes.string,
    zoom: PropTypes.number,
    children: PropTypes.array,
  }

  static childContextTypes = {
    map: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    flyOnCenterChange: false,
  }

  constructor(props, context) {
    super(props, context)
    mapboxgl.accessToken = props.token

    this.state = {
      map: null,
    }
  }

  getChildContext() {
    return {
      map: this.state.map,
    }
  }

  componentDidMount() {
    const opts = {
      container: this.container,
      style: this.props.style,
      zoom: this.props.zoom,
      theme: this.props.theme,
    }

    if (this.props.center) opts.center = this.props.center

    const map = new mapboxgl.Map(opts)
    map.on('load', () => {
      this.setState({ map })
    })
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.state

    const { center, flyOnCenterChange } = nextProps

    if (map && center && (center !== this.props.center)) {
      if (flyOnCenterChange) {
        map.flyTo(nextProps.center)
      } else {
        map.setCenter(nextProps.center)
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.children !== this.props.children ||
      nextState.map !== this.state.map)
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      children,
    } = this.props

    const { map } = this.state

    return (
      <div>
        <div
          ref={x => { this.container = x }}
          className={classNames(
            className,
            theme[`Map-${color}`],
            theme[`Map-${size}`],
            theme.Map,
          )}
        >
          {map && children}
        </div>
      </div>
    )
  }
}
