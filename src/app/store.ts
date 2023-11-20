import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { guestsApi } from "./services/GuestsApi"

export const store = configureStore({
  reducer: {
    [guestsApi.reducerPath]: guestsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(guestsApi.middleware),
})

setupListeners(store.dispatch)
