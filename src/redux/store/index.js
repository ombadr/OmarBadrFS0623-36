import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favorites";
import jobReducer from "../reducers/jobs";


const bigReducer = combineReducers({
    favorites: favoritesReducer,
    jobs: jobReducer
})

const store = configureStore({
    reducer: bigReducer
})

export default store