import React, { FC, useRef, PropsWithChildren } from 'react'
import APILoader from '../utils/APILoader'
import { useAsyncEffect } from '../hooks/useAsyncEffect'
import '../../types/global'
import { Adpater } from '../utils/Adpater'

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
    height = '50vh'
  } = props
  const mapRef = useRef(null)

  useAsyncEffect(async () => {
    await new APILoader({
      appName,
      appKey,
      version
    }).load()

    const Map = Adpater(appName).Map

    // eslint-disable-next-line no-new
    new Map(mapRef.current, {
      zoom: 11,
      center
    })
  }, [])

  return (
    <div className="react-map" style={{ width, height }}>
      <div
        ref={mapRef}
        className="map-conatiner"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default ReactMap
