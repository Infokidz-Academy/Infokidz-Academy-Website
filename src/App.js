import './App.css';
import { Home, HowInfokidzWorks, Programs, AboutUs, Contact, Register, PracticeWorksheets, Testimonials, FAQ} from "./components/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-infokidz-works" element={<HowInfokidzWorks />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/practice-worksheets" element={<PracticeWorksheets />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
