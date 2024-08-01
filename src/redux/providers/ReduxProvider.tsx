// import React from "react"
// import { Provider } from "react-redux"
// import { PersistGate } from "redux-persist/integration/react"
// import { wrapper } from "../store/store" // Import your store
// import { persistStore } from "redux-persist"

// const ReduxProvider = ({ children }: { children: React.JSX.Element }) => {
//     const { store, props } = wrapper.useWrappedStore()
//     const persistor = persistStore(store)
//     return (
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 {children}
//             </PersistGate>
//         </Provider>
//     )
// }

// export default ReduxProvider
