import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

import ContactForm from "./components/ContactForm";
import ComingSoonPage from "./pages/ComingSoonPage";
import CommunityPage from "./pages/CommunityPage";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { OS } from "./utils/Platform"

const App = () => {
  const [active, setActive] = useState(false);
  const [os, setOs] = useState(null)
  // const [name, setName] = useState("");
  // const [castle, setCastle] = useState("");
  // const [company, setCompany] = useState("");
  // const [contact, setContact] = useState("");
  // const [email, setEmail] = useState("");
  // const [content, setContent] = useState("");

  // console.log(watch("example"));
  useEffect(() => {
    console.log(OS(window))
    setOs(OS(window))
    return () => {
      // second
    }
  }, [])
  

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };

  return (
    <I18nextProvider i18n={i18n}>
      <div className="relative">
      {/* <div className={`relative ${OS(window) == 'Windows OS' ? 'czoom': ''}`}> */}
        <BrowserRouter>
          {/* <Navbar /> */}

          <ScrollToTop />

          {/* <div className="h-[100px] pb-[-100px]"></div> */}
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/comingsoon" element={<ComingSoonPage />} />
            <Route path="/community" element={<CommunityPage />} />

            <Route
              path="/"
              element={<HomePage setActive={setActive} active={active} />}
            />
          </Routes>
          {/* <h2>{t('welcome_to_react')}</h2> */}

          <Footer />
        </BrowserRouter>

        {/* CONTACT MODAL */}
        {active === true ? (
          <ContactForm setActive={setActive} active={active} />
        ) : (
          <></>
        )}
      </div>
    </I18nextProvider>
  );
};

export default App;
