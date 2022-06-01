import "./App.css";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import FAQ from "./components/pages/faq";
import Testimonials from "./components/pages/testimonials";
import Contact from "./components/pages/contact";
// , HowInfokidzWorks, Programs, Register, PracticeWorksheets, Policies, DirectDeposit
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Signika Negative", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#66d0ff",
      darker: "#66d0ff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            {/*<Route path="/how-infokidz-works" element={<HowInfokidzWorks />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/practice-worksheets" element={<PracticeWorksheets />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/direct-deposit" element={<DirectDeposit />} />*/}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
