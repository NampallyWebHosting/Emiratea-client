import AddressCard from './components/internal/addressCard/AddressCard'
import GreenScreen from './components/internal/heroGrid/green'
import Main from './components/internal/header/HeroWithNav'
import MenuScreen from './components/internal/animatedMenu/FloatingMenuText'
import InstaGenic from './components/internal/instaGenic/InstaGenic'
import Footer from './components/internal/footer/Footer'
import Page from './components/internal/stickyImageScroll/ScrollSync'

const App = () => {
  return (
    <>
      <Main />
      <Page/>
      <MenuScreen />
      <GreenScreen />
      <AddressCard />
      <InstaGenic />
      <Footer/>
    </>
  )
}

export default App