import { MapType } from '../../components/Map'

const getMapAdpater = (type: MapType) => {
  let adpater = null

  if (type === 'AMap') {
    adpater = require('./AMap').default
  } else {
    adpater = require('./BMap').default
  }

  return adpater
}

export const Adpater = (type: MapType) => {
  return getMapAdpater(type)
}

export type AdpaterType = ReturnType<typeof Adpater>
