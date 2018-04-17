import { GmapInteraction } from '../GmapInteraction'

describe('GmapInteraction', () => {
  const onZoom = jest.fn()
  const addGeoJson = jest.fn()

  it('registers the map', () => {
    const map = { onZoom, data: { addGeoJson } }
    const registerSpy = jest.spyOn(GmapInteraction, 'registerMap')
    GmapInteraction.registerMap(map)

    expect(registerSpy).toHaveBeenCalledTimes(1)
    expect(registerSpy).toHaveBeenCalledWith(map)
  })

  it('cannot register map more than once', () => {
    const onPan = jest.fn()
    const map = { onPan }

    GmapInteraction.registerMap(map)
    GmapInteraction.call('onPan')
    expect(map.onPan).not.toHaveBeenCalled()
  })

  it('invokes call', () => {
    const args = { foo: 'bar' }
    GmapInteraction.call('onZoom', args)
    expect(onZoom).toHaveBeenCalledWith(...args)
  })

  it('invokes a deep call', () => {
    const args = { foo: 'bar' }
    GmapInteraction.call('data.addGeoJson', args)
    expect(addGeoJson).toHaveBeenCalledWith(...args)
  })
})

describe('MarkerInteraction', () => {
  it('adds a marker to the map', () => {
    const markerSpy = jest.spyOn(window.google.maps, 'Marker')
    const result = GmapInteraction.MarkerInteraction.setupMarker({})

    expect(markerSpy).toHaveBeenCalled()
    expect(result).toEqual({})
  })
  it('removes a marker', () => {
    const setMap = jest.fn()
    const eventSpy = jest.spyOn(
      window.google.maps.event,
      'clearInstanceListeners'
    )
    const marker = { id: 'markerId', setMap }
    GmapInteraction.MarkerInteraction.removeMarker(marker)

    expect(eventSpy).toHaveBeenCalledWith(marker)
    expect(marker.setMap).toHaveBeenCalledWith(null)
  })
})
