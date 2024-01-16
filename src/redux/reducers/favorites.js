import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const initialState = {
    content: []
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                content: [...state.content, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                content: state.content.filter((favorite) => favorite._id !== action.payload._id)
            }

        default:
            return state
    }
}

export default favoritesReducer