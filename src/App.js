import './App.css';
import Home from './Pages/Home/home';
import Footer from './components/Footer/Footer';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="h-[200vh]"></div>
      <Footer />
      {/* <ImageCarousel /> */}
    </>
  );
}

export default App;
