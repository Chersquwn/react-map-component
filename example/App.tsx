import { hot } from 'react-hot-loader/root'
import React, { ReactElement } from 'react'
import ReactMap from '../src/components/Map'
import Marker from '../src/components/Marker'
import Polyline from '../src/components/Polyline'

const App = (): ReactElement => {
  return (
    // <ReactMap
    //   appKey="7ec287825cf47c2e14ddc71362e00b2c"
    //   appName="AMap"
    //   center={[116.397428, 39.90923]}
    //   version="1.4.15"
    // >
    //   <Marker position={[116.397428, 39.90923]} />
    //   <Polyline
    //     path={[
    //       [116.368904, 39.913423],
    //       [116.382122, 39.901176],
    //       [116.387271, 39.912501],
    //       [116.398258, 39.9046]
    //     ]}
    //     strokeWeight={2}
    //   />
    // </ReactMap>
    <ReactMap
      appKey="jFNCb6rS89svpuvO7bNElYOcHF1Yyoi0"
      appName="BMap"
      center={[116.397428, 39.90923]}
      version="3.0"
    >
      <Marker position={[116.397428, 39.90923]} />
      <Polyline
        path={[
          [116.368904, 39.913423],
          [116.382122, 39.901176],
          [116.387271, 39.912501],
          [116.398258, 39.9046]
        ]}
        strokeWeight={2}
      />
    </ReactMap>
  )
}

export default hot(App)
