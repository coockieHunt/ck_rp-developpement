const initialState = {
    content: "valeur de deput de deuxiem"
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case "SET_TEST_SEC":
            return {...state, content : action.content}

        default: return state;
    }
}