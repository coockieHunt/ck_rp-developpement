import { GlobalStore } from './store'

/**
 * Call payload to global store.
 * @link https://redux.js.org/api/store
 * @param {string} payload react payload
 */
window.dispatchPayload = (payload) => {
    GlobalStore.dispatch(payload);
}


/**
 *  print console global store
 *  @returns {string} output console,  global store
 */
window.store = () => {
    console.log(GlobalStore.getState())
}