import React, { FC, useRef, PropsWithChildren, useState } from 'react'
import APILoader from '../utils/APILoader'
import { useAsyncEffect } from '../hooks/useAsyncEffect'
import '../../types/global'
import { Adpater } from '../utils/Adapter'
import { MapContext } from './MapContext'
import { convert } from '../utils/convert'

export type MapType = 'AMap' | 'BMap'

export type Coords = [number, number]

export interface ReactMapProps extends PropsWithChildren<{}> {
  appKey: string
  appName: MapType
  version: string
  width?: number
  height?: number
  center?: Coords
}

const ReactMap: FC<ReactMapProps> = props => {
  const {
    appKey,
    appName,
    version,
    center,
    width = '100vw',
    height = '50vh',
    children
  } = props
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [MapAdapter, setMapAdapter] = useState(null)

  useAsyncEffect(async () => {
    await new APILoader({
      appName,
      appKey,
      version
    }).load()

    const MapAdapter = Adpater(appName)
    const Map = MapAdapter.Map
    const position = new MapAdapter.LngLat(center[0], center[1])

    convert([position], 'gps', data => {
      if (data.status === 0) {
        // eslint-disable-next-line no-new
        const map = new Map(mapRef.current, {
          zoom: 11,
          center: data.locations[0]
        })

        setMap(map)
        setMapAdapter(MapAdapter)
      }
    })
  }, [])

  return (
    <MapContext.Provider value={{ map, MapAdapter }}>
      <div className="react-map" style={{ width, height }}>
        <div
          ref={mapRef}
          className="map-conatiner"
          style={{ width: '100%', height: '100%' }}
        />
        {children}
      </div>
    </MapContext.Provider>
  )
}

export default ReactMap
