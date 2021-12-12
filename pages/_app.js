import 'tailwindcss/tailwind.css'
import "../styles/global.css"

// Layout
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
