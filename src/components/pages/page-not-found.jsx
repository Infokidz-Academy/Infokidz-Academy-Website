import Footer from "../footer";
import NavBar from "../navbar";
import "../../styling/pages/page-not-found.css";

function PageNotFound() {
  return (
    <>
      <NavBar />
      <div id="pagenotfound">
        <h1 id="pagenotfound-text">404: Sorry, Page Not Found</h1>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
