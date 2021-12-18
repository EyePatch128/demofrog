import 'tailwindcss/tailwind.css'
import "../styles/global.css"

import ConstructionModal from '../components/Construction'


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ConstructionModal />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp