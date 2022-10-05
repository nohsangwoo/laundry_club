import counterSlice from '@src/store/reducers/counterSlice.saga'
import { useAppDispatch, useAppSelector } from '@src/store/store'
import React, { ForwardedRef, forwardRef, useEffect } from 'react'

interface Props {
  test: any
}
const Children1 = forwardRef(({ test }: Props, ref) => {
  const dispatch = useAppDispatch()
  const number = useAppSelector(state => state.counter.number)
  const [count, setCount] = React.useState(0)

  const increase = (num: number) => {
    dispatch(counterSlice.actions.increase(num))
  }

  return (
    <div>
      <div>count:{count}</div>
      <div>inside title: Children1 {number}</div>
      <button
        onClick={() => {
          ref.current = count + 1
          test.p1 = count + 1
          increase(1)
          setCount(count + 1)
        }}
      >
        increase
      </button>

      <div>object test.p1: {test.p1}</div>
      <button
        onClick={() => {
          test.p1 = test.p1 + 1
        }}
      >
        test obj increase
      </button>
      <button
        onClick={() => {
          // @ts-ignore
          ref.current = ref.current + 1
        }}
      >
        ref.current increase
      </button>
    </div>
  )
})
export default Children1
