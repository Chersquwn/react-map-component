import { Coords } from 'src/components/Map'

interface CallbackData {
  status: 0 | 1
  locations: any[]
}

type Callback = (data: CallbackData) => void

type ConvertType = 'gps' | 'amap' | 'bmap'

export const convert = (
  points: Coords[],
  type: ConvertType,
  callback: Callback
) => {
  if (window.AMap) {
    let convertType

    if (type === 'gps') {
      convertType = 'gps'
    } else if (type === 'bmap') {
      convertType = 'baidu'
    }

    window.AMap.convertFrom(points, convertType, (status: any, result: any) => {
      if (result.info === 'ok') {
        callback({
          status: 0,
          locations: result.locations
        })
      }
    })
  }

  if (window.BMap) {
    const BMap = window.BMap
    const convertor = new BMap.Convertor()
    let from = 1

    if (type === 'gps') {
      from = 1
    } else if (type === 'amap') {
      from = 3
    }

    convertor.translate(points, from, 5, (data: any) => {
      if (data.status === 0) {
        callback({
          status: 0,
          locations: data.points
        })
      }
    })
  }
}
