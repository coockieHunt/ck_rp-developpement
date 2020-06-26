import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import {TestCompenent} from './compenents/TestCompenent'

import '../css/index.scss'
// import {Background_game} from './frame/backgroud_game.jsx'

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <TestCompenent />
  </Provider>,
    rootElement
)

window.dispatchPayload = (payload) => {
  store.dispatch(payload);
}

window.test = () => {
  console.log(store)

}


