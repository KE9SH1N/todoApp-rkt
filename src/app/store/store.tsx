import { configureStore } from "@reduxjs/toolkit"

import counterReducer from '../features/counterSlice'
import colorReducer from '../features/colorSlice'

export const store = configureStore ({
  reducer:{
    counter: counterReducer,
    bgColor: colorReducer,
  }
})

