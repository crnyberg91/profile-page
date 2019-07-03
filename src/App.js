import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import MainContentContainer from './components/MainContentContainer';
import "normalize.css";
import Footer from "./components/Footer";
import NavbarPage from './components/NavBarPage';

function App() {
  return (
    <>
      <NavbarPage />
      <MainContentContainer />
      <Footer/>
    </>
  )
}

export default App;
