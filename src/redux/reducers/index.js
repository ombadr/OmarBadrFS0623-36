const initialState = {
    favorites: {
        content: []
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    content: [...state.favorites.content, action.payload]
                }
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    content: state.favorites.content.filter(
                        favorite => favorite._id !== action.payload._id
                    )
                }
            }
        default:
            return state
    }
}

export default mainReducer