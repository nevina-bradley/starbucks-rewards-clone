import LowerHeader from './components/Header/LowerHeader';
import Extras from './containers/Extras/Extras';
import Header from "./containers/Header";
import MainDesktop from "./containers/Join/MainDesktop";
import Started from './containers/Started/Started';
import Cash from './containers/Cash/Cash';
import Questions from './containers/Questions/Questions';
import Terms from './containers/Terms/Terms';
import Footer from "./containers/Footer";
import SkyMiles from "../src/containers/SkyMiles/SkyMiles"
import MainMobile from './containers/Join/MainMobile';
import Favorites from './containers/Favorites/Favorites';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <div className='mb-[72px] md:mb-[128px]'>
          <MainDesktop />
          <MainMobile />
        </div>
        <Started />
        <Favorites />
        <Extras />
        <Cash />
        <SkyMiles />
        <Questions />
        <Terms />
        <Footer />
      </section>
    </div>
  );
}

export default App;
