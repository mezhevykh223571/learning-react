import React from 'react'
import ReactDOM, { render } from 'react-dom'
import '../node_modules/@mezhevykh/reset-styles/src/reset.scss'
import './index.scss'

import App from './App'

import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)

serviceWorker.unregister()
