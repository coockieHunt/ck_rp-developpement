import constants from "../app/constants"

const initialState = {
    current : "background"
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case  constants.CHANGE_WINDOW:
            return {...state, current : action.current}

        default: return state;
    }
}