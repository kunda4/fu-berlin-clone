import EventPage from './component/eventPage'
import Footer from './component/footer'
import GlobalConnection from './component/globalConnection'
import HeroPage from './component/heroPage'
import Navbar from './component/navbar'
import SearchPage from './component/searchPage'
import Service from './component/services'
import Studying from './component/studying'

function App() {

  return (
    <>
    <div className='max-w-7xl mx-auto lg:px-0 px-2'>
     <Navbar/>
     <HeroPage/>
     <EventPage/>
     <Studying/>
     <SearchPage/>
     <GlobalConnection/>
     <Service/>
     <Footer/>
     </div>
    </>
  )
}

export default App
