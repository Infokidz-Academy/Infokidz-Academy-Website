import React, { Suspense, useState, useEffect } from "react";
import "../../App.css";
import { Button, CircularProgress } from "@mui/material";
import Axios from "axios";
const WorksheetsSelection = React.lazy(() =>
  import("../practice-worksheets/worksheetsselection")
);
const Worksheets = React.lazy(() =>
  import("../practice-worksheets/worksheets")
);
const WorksheetsForm = React.lazy(() =>
  import("../practice-worksheets/worksheetsform")
);
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function PracticeWorksheetsAdmin() {
  // States for form selection options
  const [subject, setSubject] = useState("Math");
  const [sort, setSort] = useState("Grade");

  // Did authentication succeed
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Obtain correct email
  var correctEmail;

  Axios.get("http://localhost:5000/auth/correctemail").then((response) => {
    correctEmail = response.data;
  });

  useEffect(() => {
    // Obtain current email
    Axios.get("http://localhost:5000/auth/email").then((response) => {
      // If the correct user has logged in, allow them acccess
      if (response.data === correctEmail && response.data != null) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [correctEmail]);

  // Google Authentication
  const authenticate = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  // Log out
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");

    setIsAuthenticated(false);
  };

  // Login page to display before successful login
  const loginPage = (
    <>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
      </Suspense>
      <div
        style={{
          width: "100%",
          height: "40vh",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => authenticate()}
          className="button"
          variant="contained"
          style={{
            height: "35px",
            margin: "auto",
            marginTop: "20vh",
          }}
        >
          Log In
        </Button>
      </div>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Footer />
      </Suspense>
    </>
  );

  // Admin page to display upon successful login
  const adminPage = (
    <>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
      </Suspense>
      <div
        style={{
          width: "100%",
          height: "20vh",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => logout()}
          className="button"
          variant="contained"
          style={{
            height: "35px",
            margin: "auto",
            marginTop: "10vh",
          }}
        >
          Log Out
        </Button>
      </div>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <WorksheetsForm />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <WorksheetsSelection
          subject={subject}
          setSubject={setSubject}
          sort={sort}
          setSort={setSort}
        />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Worksheets subject={subject} sort={sort} isAdmin={true} />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Footer />
      </Suspense>
    </>
  );

  return isAuthenticated ? adminPage : loginPage;
}

export default PracticeWorksheetsAdmin;
