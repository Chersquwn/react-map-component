import { FC, useEffect, useContext } from 'react'
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

  useEffect(() => {
    if (!map || !MapAdapter) return

    const polygon = new MapAdapter.Polygon({
      path,
      fillColor,
      borderWeight,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      fillOpacity,
      strokeStyle
    })

    map.add([polygon])
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
