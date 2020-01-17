export interface BMapOptions {
  center: [number, number]
  zoom: number
}

export default class BMap {
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
