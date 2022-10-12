import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import Carousel from './Components/Carousel';
import Welcome from './Components/Welcome';
import Objectives from './Components/Objectives';
import Help from './Components/Help';
import Events from './Components/Events';
import Stats from './Components/Stats';
import Fund from './Components/Fund';
import Speakers from './Components/Speakers';
import SocialHandle from './Components/SocialHandle';
import About from './Components/footer/About';
import Partners from './Components/Partners';


function App() {
  return (
    <>
    <NavBar />
   
    <Carousel />
    <Welcome/>
    <Objectives />
    <Help />
    <Events />
    {/* <Stats /> */}

    <Fund />
    <Speakers />

    <SocialHandle />

<Partners />

    <About />


    </>
  );
}

export default App;
