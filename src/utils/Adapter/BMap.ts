type BMapPosition = [number, number]

export interface BMapOptions {
  center: BMapPosition
  zoom: number
}

export interface BMarkerOptions {
  icon?: string
  position: BMapPosition
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
      this._map.addOverlay(overlay)
    })
  }
}

export class BMarker {
  public constructor(options: BMarkerOptions) {
    const {
      icon = 'http://api0.map.bdimg.com/images/marker_red_sprite.png',
      position
    } = options
    const BMap = window.BMap
    const markerIcon = new BMap.Icon(icon, new BMap.Size(23, 25), {
      anchor: new BMap.Size(10, 25)
    })
    const point = new BMap.Point(position[0], position[1])

    return new BMap.Marker(point, { icon: markerIcon })
  }
}

export default {
  Map: BMap,
  Marker: BMarker
}
