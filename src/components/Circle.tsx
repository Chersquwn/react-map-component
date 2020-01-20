import { FC, useContext, useEffect, useRef } from 'react'
import { Coords } from './Map'
import { MapContext } from './MapContext'
import { convert } from '../utils/convert'

export interface CircleProps {
  center: Coords
  radius: number
  strokeColor?: string
  strokeOpacity?: number
  strokeWeight?: number
  fillColor?: string
  fillOpacity?: number
  strokeStyle?: 'solid' | 'dashed'
}

const Circle: FC<CircleProps> = props => {
  const {
    center,
    radius,
    fillColor = '#1791FC',
    strokeColor = '#FF33FF',
    strokeOpacity = 0.4,
    strokeWeight = 1,
    fillOpacity = 0.4,
    strokeStyle = 'solid'
  } = props
  const { map, MapAdapter } = useContext(MapContext)
  const circleRef = useRef(null)

  useEffect(() => {
    if (!map || !MapAdapter) return
    if (circleRef.current) map.remove([circleRef.current])

    const position = new MapAdapter.LngLat(center[0], center[1])

    convert([position], 'gps', data => {
      if (data.status === 0) {
        circleRef.current = new MapAdapter.Circle({
          center: data.locations[0],
          radius,
          fillColor,
          strokeColor,
          strokeOpacity,
          strokeWeight,
          fillOpacity,
          strokeStyle
        })

        map.add([circleRef.current])
      }
    })
  }, [
    map,
    MapAdapter,
    center,
    radius,
    fillColor,
    strokeColor,
    strokeOpacity,
    strokeWeight,
    fillOpacity,
    strokeStyle
  ])

  return null
}

export default Circle
