import AddressCard from './components/internal/AddressCard'
import FullScreenSvgImage from './components/internal/dummy'
import Footer from './components/internal/Footer'
import GreenScreen from './components/internal/green'
import InstaGenic from './components/internal/instaGenic'
import Main from './components/internal/main'
import MenuScreen from './components/internal/FloatingMenuText'

const App = () => {
  return (
    <>
      <Main />
      <FullScreenSvgImage />
      <MenuScreen />
      <GreenScreen />
      <AddressCard />
      <InstaGenic />
      <Footer/>
    </>
  )
}

export default App