import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/home';
import { Parallex } from './Pages/Parallex/Parallex';
import AICTE from './components/AICTE/AICTE';
import IIITADMISSION from './components/Admission/IIITAdmission';
import BOG from './components/BOG/BOG';
import Director from './components/Director/Director';
import FeedbackFacilityForStudent from './components/FeedbackFacilityForStudent/FeedbackFacilityForStudent';
import Footer from './components/Footer/Footer';
import Grievance from './components/Grievance/Grievance';
import IIITACT from './components/IIITAct/IIITACT';
import IIITStatue from './components/IIITStatue/IIITStatue';
import NIRF from './components/NIRF/NIRF';
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
        <Route exact path="/iiitstatue" element={<IIITStatue />} />
        <Route exact path="/bog" element={<BOG />} />
        <Route exact path="/rti" element={<RTI />} />
        <Route exact path="/scstobc-cell" element={<Scstobccell />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/admission" element={<IIITADMISSION />} />

        <Route
          exact
          path="/online-grievance-redressal"
          element={<Grievance />}
        />
        <Route
          exact
          path="/feedbackstudent"
          element={<FeedbackFacilityForStudent />}
        />

        <Route exact path="/nirf" element={<NIRF />} />
        <Route exact path="/aicte" element={<AICTE />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
