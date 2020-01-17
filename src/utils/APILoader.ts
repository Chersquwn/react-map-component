import { MapType } from '../components/Map'
import { MapAPI } from '../api/map'
import '../../types/global'

export interface APILoaderConfig {
  appKey: string
  appName: MapType
  version: string
}

export default class APILoader {
  public config: APILoaderConfig

  public constructor(config: APILoaderConfig) {
    this.config = config
  }

  public async load() {
    const { appKey, appName, version } = this.config

    if (window[appName]) {
      return Promise.resolve()
    }

    const APIConfig = MapAPI[appName]
    const script = this.createScript(
      `${APIConfig.api}?${APIConfig.version}=${version}&${APIConfig.key}=${appKey}`
    )
    const promise = new Promise((resolve, reject) => {
      script.onload = () => {
        resolve()
      }

      script.onerror = e => {
        reject(e)
      }
    })

    document.body.appendChild(script)

    return promise
  }

  private createScript(src: string) {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    script.src = src

    return script
  }
}
