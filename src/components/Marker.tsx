import { FC, useContext, useEffect } from 'react'
import { MapContext } from './MapContext'

export interface MarkerProps {
  icon?: string
  position: [number, number]
}

const Marker: FC<MarkerProps> = props => {
  const { icon, position } = props
  const { map, MapAdapter } = useContext(MapContext)

  useEffect(() => {
    if (!map || !MapAdapter) return

    const marker = new MapAdapter.Marker({
      icon,
      position
    })
    map.add([marker])
  }, [MapAdapter, icon, map, position])

  return null
}

export default Marker
