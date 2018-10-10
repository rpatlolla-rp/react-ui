import React from 'react'
import { Gmap } from 'react-ui-core/src'
import {
  PdpMap as Pdp,
  Marker,
  Markers,
  blackDotIconWithBalloon,
} from 'react-ui-ag/src'
import geojson from '../../dummyData/geojson.json'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'
const selectedCoords = geojson.features[382].geometry.coordinates
const position = {
  lng: selectedCoords[0],
  lat: selectedCoords[1],
}

export const DefaultGmap = () => (
  <Gmap apiKey={key} geojson={geojson} />
)

export const PdpMap = () => (
  <Pdp
    apiKey={key}
    listing={{
      location: { latitude: 33.7490, longitude: -84.3880 },
    }}
  />
)

export const MultipleMarkers = () => (
  <Gmap apiKey={key} zoom={13}>
    <Markers geojson={geojson} />
  </Gmap>
)

export const SelectedMarker = () => (
  <Gmap apiKey={key} zoom={13}>
    <Markers geojson={geojson} />
    <Marker
      position={position}
      marker={() => ({
        icon: blackDotIconWithBalloon(),
      })}
      zIndex={1000}
    />
  </Gmap>
)
