//  IMPORT MODULE
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStore } from './app/store.jsx'
// import globaly
import './app/function.jsx'
import '../src/css/main.scss'

// IMPORT COMPENENT
import {DialogCompenent} from './compenents'

// inject shadow dom
const rootElement = document.getElementById('App')
ReactDOM.render(
  <Provider store={GlobalStore}>
      < DialogCompenent />
  </Provider>,
    rootElement
)




