//  IMPORT MODULE
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStore } from './store'
import {TestCompenent} from './compenents'
// IMPORT FUNCTION
import './app'

//IMPORT MAIN STYLE
import '../src/css/main.scss'

// INJECT SHADOW DOM TO DOM
const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={GlobalStore}>
    <TestCompenent />
  </Provider>,
    rootElement
)




