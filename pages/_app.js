import '../styles/globals.css'
import '../styles/body.css'
import 'react-multi-carousel/lib/styles.css';

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp
