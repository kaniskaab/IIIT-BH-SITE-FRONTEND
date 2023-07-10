import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      {/* below div is just to check if the navbar working fine or not */}
      <div className="h-[200vh]"></div>
      <Footer />
    </>
  );
}

export default App;
