import { FC, useEffect, useContext, useRef } from 'react'
import { Coords } from './Map'
import { MapContext } from './MapContext'

export interface PolygonProps {
  path: Coords[]
  fillColor?: string
  borderWeight?: number
  strokeColor?: string
  strokeOpacity?: number
  strokeWeight: number
  fillOpacity?: number
  strokeStyle?: 'solid' | 'dashed'
}

const Polygon: FC<PolygonProps> = props => {
  const {
    path,
    fillColor = '#1791FC',
    borderWeight = 1,
    strokeColor = '#FF33FF',
    strokeOpacity = 0.9,
    strokeWeight,
    fillOpacity = 0.9,
    strokeStyle = 'solid'
  } = props
  const { map, MapAdapter } = useContext(MapContext)
  const polygonRef = useRef(null)

  useEffect(() => {
    if (!map || !MapAdapter) return
    if (polygonRef.current) map.remove([polygonRef.current])

    polygonRef.current = new MapAdapter.Polygon({
      path,
      fillColor,
      borderWeight,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      fillOpacity,
      strokeStyle
    })

    map.add([polygonRef.current])
  }, [
    MapAdapter,
    borderWeight,
    fillColor,
    fillOpacity,
    map,
    path,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight
  ])

  return null
}

export default Polygon
