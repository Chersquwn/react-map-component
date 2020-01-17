interface AMapType {
  Map: any
}

interface BMapType {
  Map: any
  Point: any
}

declare global {
  export interface Window {
    AMap: AMapType
    BMap: BMapType
  }
}

export {}

// window.AMap = { Map: {} }
// window.BMap = { Map: {} }
// window.MapAdpater = { Map: {} }