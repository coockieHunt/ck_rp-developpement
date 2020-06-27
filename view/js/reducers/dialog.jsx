const initialState = {
    current : "background"
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case "SET_DIALOG":
            return {...state, current : action.current}

        default: return state;
    }
}