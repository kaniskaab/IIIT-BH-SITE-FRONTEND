import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/home';
import { Parallex } from './Pages/Parallex/Parallex';
import Director from './components/Director/Director';
import Footer from './components/Footer/Footer';
import IIITACT from './components/IIITAct/IIITACT';
import RTI from './components/RTI/RTI';
import Resources from './components/Resources/Resources';
import Scstobccell from './components/Scstobccell/Scstobccell';
import Header from './components/header/header';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<></>} />
        <Route path="/:any" element={<Header common />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About truncate={false} />} />
        <Route exact path="/test" element={<Parallex />} />
        <Route
          exact
          path="/directors_message"
          element={<Director truncate={false} />}
        />

        <Route exact path="/iiitact" element={<IIITACT />} />
        <Route exact path="/iiitstatue" element={<Home />} />
        <Route exact path="/rti" element={<RTI />} />
        <Route exact path="/scstobc-cell" element={<Scstobccell />} />
        <Route exact path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
