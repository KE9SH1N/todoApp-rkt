import { configureStore } from "@reduxjs/toolkit"

import counterReducer from '../features/counterSlice'
import colorReducer from '../features/colorSlice'
import cartReducer from '../features/cartSlice'

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore ({
  reducer:{
    counter: counterReducer,
    bgColor: colorReducer,
    cart: cartReducer,
  }
})




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;