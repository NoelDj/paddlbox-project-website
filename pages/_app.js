import Layout from '../components/Layout'
import '../styles/bootstrap.scss'
import '../styles/datepicker.scss'  
import '../styles/niceselect.scss'
import '../styles/themestyle.scss'
import '../styles/responsive.scss'
import '../styles/mystyle.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
