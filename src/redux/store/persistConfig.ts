import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage
import authSlice from "../slices/authSlice"
import { combineReducers } from "redux"

interface PersistConfig {
    key: string
    storage: typeof storage
    whitelist?: string[]
}

const persistConfig: PersistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "example"], // Only persist the 'auth' and 'example' slice
}

// wrap the root reducer in persistReducer
const rootReducer = combineReducers({
    auth: authSlice,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer) // Replace with your actual rootReducer
