// // store.js
// import { configureStore } from "@reduxjs/toolkit"
// import { createWrapper } from "next-redux-wrapper"
// import { persistStore } from "redux-persist"
// import thunk from "redux-thunk"
// import { persistedReducer } from "./persistConfig"

// const makeStore = () =>
//     configureStore({
//         reducer: persistedReducer,
//         middleware: [thunk],
//     })

// const store = makeStore()

// export const persistor = persistStore(store)
// export const wrapper = createWrapper(makeStore)
