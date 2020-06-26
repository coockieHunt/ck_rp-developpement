const initialState = {
    value: "basse"
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        console.log ("init reducer")
        return initialState
    }
    switch(action.type) {
        case "SET_TEST":
            console.log ("update reducer")
            return {...state, value: action.value}

        default: return state;
    }
}