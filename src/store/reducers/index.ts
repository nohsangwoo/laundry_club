import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import counterSlice from './counterSlice.saga'
import userSlice from './userSlice.saga'

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
