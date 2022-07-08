import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";
import { CircularProgress, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
const Home = lazy(() => import("./components/pages/home"));
const AboutUs = lazy(() => import("./components/pages/about-us"));
const FAQ = lazy(() => import("./components/pages/faq"));
const Testimonials = lazy(() => import("./components/pages/testimonials"));
const Contact = lazy(() => import("./components/pages/contact"));
const Registration = lazy(() => import("./components/pages/registration"));
const Programs = lazy(() => import("./components/pages/programs"));
const HowInfokidzWorks = lazy(() =>
  import("./components/pages/how-infokidz-works")
);
const Policies = lazy(() => import("./components/pages/policies"));
// PracticeWorksheets, DirectDeposit
const PageNotFound = lazy(() => import("./components/pages/page-not-found"));

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
          <Suspense
            fallback={
              <CircularProgress
                style={{ marginLeft: "48%", marginTop: "20%" }}
              />
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/programs" element={<Programs />} />
              <Route
                path="/how-infokidz-works"
                element={<HowInfokidzWorks />}
              />
              <Route path="/policies" element={<Policies />} />
              {/*
            <Route path="/practice-worksheets" element={<PracticeWorksheets />} />     
            <Route path="/direct-deposit" element={<DirectDeposit />} />*/}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
