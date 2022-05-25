import "./App.css";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import FAQ from "./components/pages/faq";
// , HowInfokidzWorks, Programs, Contact, Register, PracticeWorksheets, Testimonials, Policies, DirectDeposit
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          {/*<Route path="/how-infokidz-works" element={<HowInfokidzWorks />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/practice-worksheets" element={<PracticeWorksheets />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/direct-deposit" element={<DirectDeposit />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
