import { FC, useEffect, useContext } from 'react'
import { Coords } from './Map'
import { MapContext } from './MapContext'

export interface PolylineProps {
  path: Coords[]
  borderWeight?: number
  strokeColor?: string
  strokeOpacity?: number
  strokeWeight: number
  strokeStyle?: 'solid' | 'dashed'
}

const Polyline: FC<PolylineProps> = props => {
  const {
    path,
    borderWeight = 1,
    strokeColor = '#006600',
    strokeOpacity = 0.9,
    strokeStyle = 'solid'
  } = props
  const { MapAdapter, map } = useContext(MapContext)

  useEffect(() => {
    if (!map || !MapAdapter) return

    const polyline = new MapAdapter.Polyline({
      path,
      borderWeight,
      strokeColor,
      strokeOpacity,
      strokeStyle
    })

    map.add([polyline])
  }, [
    MapAdapter,
    borderWeight,
    map,
    path,
    strokeColor,
    strokeOpacity,
    strokeStyle
  ])

  return null
}

export default Polyline
