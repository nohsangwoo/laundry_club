import {
  allCounterStateSelector,
  noticountSelector,
} from '@src/store/reducers/counterSlice.saga'
import { useAppSelector } from '@src/store/store'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const { num, noti } = useSelector(allCounterStateSelector)

  console.log('state num: ', num)
  console.log('state noti: ',  noti)

  const dispatch = useDispatch()
  return <div>index page</div>
}
