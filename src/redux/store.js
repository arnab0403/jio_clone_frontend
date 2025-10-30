import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../redux/userSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        user:userReducer
    }
  })
}