import EventPage from './component/eventPage'
import GlobalConnection from './component/globalConnection'
import HeroPage from './component/heroPage'
import Navbar from './component/navbar'
import SearchPage from './component/searchPage'
import Service from './component/services'
import Studying from './component/studying'

function App() {

  return (
    <>
     <Navbar/>
     <HeroPage/>
     <EventPage/>
     <Studying/>
     <SearchPage/>
     <GlobalConnection/>
     <Service/>
    </>
  )
}

export default App
