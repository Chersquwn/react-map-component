interface AMapType {
  Map: any
  Marker: any
  Polyline: any
  Polygon: any
  Circle: any
  LngLat: any
  convertFrom: (...args: any) => void
}

interface BMapType {
  Map: any
  Point: any
  Icon: any
  Size: any
  Marker: any
  Polyline: any
  Polygon: any
  Circle: any
  Convertor: any
  LngLat: any
}

declare global {
  export interface Window {
    AMap: AMapType
    BMap: BMapType
  }
}

export {}