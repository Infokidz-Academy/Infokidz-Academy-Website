import "./App.css";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
// , HowInfokidzWorks, Programs, Contact, Register, PracticeWorksheets, Testimonials, FAQ, Policies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/*<Route path="/how-infokidz-works" element={<HowInfokidzWorks />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/practice-worksheets" element={<PracticeWorksheets />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/policies" element={<Policies />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
