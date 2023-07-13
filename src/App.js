import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/home';
import { Parallex } from './Pages/Parallex/Parallex';
import Director from './components/Director/Director';
import Footer from './components/Footer/Footer';
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
      </Routes>
      <Footer />
    </>
  );
}
export default App;
