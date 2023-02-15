import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countriesAPI } from "../services/CountriesService";
import themeReducer from '../store/slices/themeSlice';

const rootReducer = combineReducers({
    themeReducer,
    [countriesAPI.reducerPath]: countriesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(countriesAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];