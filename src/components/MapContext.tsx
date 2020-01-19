import { createContext } from 'react'
import { AdpaterType } from 'src/utils/Adapter'
import '../../types/global'

export interface MapContext {
  MapAdapter: AdpaterType
  map: Window['AMap']['Map']
}

export const MapContext = createContext<MapContext>({
  map: null,
  MapAdapter: {}
})
