import { FC, useContext, useEffect, useRef } from 'react'
import { Coords } from './Map'
import { MapContext } from './MapContext'

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

    circleRef.current = new MapAdapter.Circle({
      center,
      radius,
      fillColor,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      fillOpacity,
      strokeStyle
    })

    map.add([circleRef.current])
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
