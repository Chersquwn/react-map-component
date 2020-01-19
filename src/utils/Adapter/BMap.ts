import { Coords } from '../../components/Map'

export interface BMapOptions {
  center: Coords
  zoom: number
}

export interface BMarkerOptions {
  icon?: string
  position: Coords
}

export interface BPolylineOptions {
  path: Coords[]
  borderWeight: number
  strokeColor: string
  strokeOpacity: number
  strokeWeight: number
  strokeStyle: 'solid' | 'dashed'
}

export interface BPolygonOptions {
  path: Coords[]
  fillColor: string
  borderWeight?: number
  strokeColor?: string
  strokeOpacity?: number
  strokeWeight: number
  fillOpacity?: number
  strokeStyle?: 'solid' | 'dashed'
}

export interface BCircleOptions {
  center: Coords
  radius: number
  strokeColor: string
  strokeOpacity: number
  strokeWeight: number
  fillColor: string
  fillOpacity: number
  strokeStyle: 'solid' | 'dashed'
}

export class BMap {
  public options: BMapOptions
  private _map: any

  public constructor(el: string, options: BMapOptions) {
    const { center, zoom } = options

    this._map = new window.BMap.Map(el)
    const point = new window.BMap.Point(center[0], center[1])

    this._map.centerAndZoom(point, zoom)
  }

  public add(overlays: any[]) {
    overlays.forEach(overlay => {
      const overlayInstance = overlay.getInstance()
      this._map.addOverlay(overlayInstance)
    })
  }

  public remove(overlays: any[]) {
    overlays.forEach(overlay => {
      if (!overlay) return

      const overlayInstance = overlay.getInstance()
      this._map.removeOverlay(overlayInstance)
    })
  }
}

export class BMarker {
  private _instance: any = null

  public constructor(options: BMarkerOptions) {
    const {
      icon = 'http://api0.map.bdimg.com/images/marker_red_sprite.png',
      position
    } = options
    const BMap = window.BMap
    const markerIcon = new BMap.Icon(icon, new BMap.Size(24, 25), {
      anchor: new BMap.Size(10, 25)
    })
    const point = new BMap.Point(position[0], position[1])

    this._instance = new BMap.Marker(point, { icon: markerIcon })
  }

  public getInstance() {
    return this._instance
  }
}

export class BPolyline {
  private _instance: any = null

  public constructor(options: BPolylineOptions) {
    const { path, ...opts } = options
    const BMap = window.BMap
    const paths = path.map(position => {
      return new BMap.Point(position[0], position[1])
    })

    this._instance = new BMap.Polyline(paths, opts)
  }

  public getInstance() {
    return this._instance
  }
}

export class BPolygon {
  private _instance: any = null

  public constructor(options: BPolygonOptions) {
    const { path, ...opts } = options
    const BMap = window.BMap
    const paths = path.map(position => {
      return new BMap.Point(position[0], position[1])
    })

    this._instance = new BMap.Polygon(paths, opts)
  }

  public getInstance() {
    return this._instance
  }
}

export class BCircle {
  private _instance: any = null

  public constructor(options: BCircleOptions) {
    const { center, radius, ...opts } = options
    const BMap = window.BMap
    const point = new BMap.Point(center[0], center[1])

    this._instance = new BMap.Circle(point, radius, opts)
  }

  public getInstance() {
    return this._instance
  }
}

export default {
  Map: BMap,
  Marker: BMarker,
  Polyline: BPolyline,
  Polygon: BPolygon,
  Circle: BCircle
}
