import '@/styles/globals.css'
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from '@/redux/store/store';
export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}
 