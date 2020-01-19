interface AMapType {
  Map: any
  Marker: any
  Polyline: any
  Polygon: any
  Circle: any
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
}

declare global {
  export interface Window {
    AMap: AMapType
    BMap: BMapType
  }
}

export {}