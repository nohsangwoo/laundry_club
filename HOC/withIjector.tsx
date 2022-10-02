import {
  allCounterStateSelector,
  noticountSelector,
} from '@src/store/reducers/counterSlice.saga'
import { useAppSelector } from '@src/store/store'
import { BrowserHistory } from 'history'
import { ComponentType, useContext } from 'react'
import { shallowEqual } from 'react-redux'

interface WrappedProps {
  // 전달받는 컴포넌트의 props
}
const withinjector = <P extends WrappedProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const Component = (props: P) => {
    const { num, noti } = useAppSelector(allCounterStateSelector, shallowEqual)

    return <WrappedComponent {...{ ...props, num, noti }} />
  }
  return Component
}

export default withinjector
