import { hot } from 'react-hot-loader/root'
import React, { ReactElement } from 'react'
import ReactMap from '../src/components/Map'

const App = (): ReactElement => {
  return (
    <ReactMap
      appKey="7ec287825cf47c2e14ddc71362e00b2c"
      appName="AMap"
      // appKey="jFNCb6rS89svpuvO7bNElYOcHF1Yyoi0"
      center={[116.397428, 39.90923]}
      // appName="BMap"
      version="1.4.15"
    />
  )
}

export default hot(App)
