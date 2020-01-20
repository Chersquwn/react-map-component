import { FC, useContext, useEffect } from 'react'
import { MapContext } from './MapContext'
import { convert } from '../utils/convert'

export interface MarkerProps {
  icon?: string
  position: [number, number]
}

const Marker: FC<MarkerProps> = props => {
  const { icon, position } = props
  const { map, MapAdapter } = useContext(MapContext)

  useEffect(() => {
    if (!map || !MapAdapter) return

    const lnglat = new MapAdapter.LngLat(position[0], position[1])

    convert([lnglat], 'gps', data => {
      if (data.status === 0) {
        const marker = new MapAdapter.Marker({
          icon,
          position: data.locations[0]
        })
        map.add([marker])
      }
    })
  }, [MapAdapter, icon, map, position])

  return null
}

export default Marker
