import React, { Suspense } from 'react'
import Nav from './Nav'
import WatchBox from './WatchBox'

const Watch = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Nav />
        <WatchBox />
      </Suspense>
    </div>
  )
}

export default Watch
