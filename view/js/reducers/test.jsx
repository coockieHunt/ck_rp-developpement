const initialState = {
    content: "valeur de deput"
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case "SET_TEST":
            return {...state, content : action.content}

        default: return state;
    }
}