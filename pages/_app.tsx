import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '../src/api'
import Layout from '../components/Layout'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@src/store/store'
const persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  )
}

export default MyApp
