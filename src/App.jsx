import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Navon from "./components/Navon";
import Navtwo from "./components/Navtwo";
import Sidebar from "./components/Sidebar";
import Over from "./pages/Over";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context";

const App = () => {
  const [state, setState] = useState(false);
  const [apiValue, setApiValue] = useState(
    localStorage.getItem("key") || "web-developer001"
  );

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ state: state, setState: setState,apiValue: apiValue, setApiValue: setApiValue }}>
          <Navbar />
          <Navon className="navonn" />
          <main className="main container">
            <Sidebar />
            <Navtwo className="navtwo " />
            <Routes>
              <Route path="/" element={<Over />} />
              <Route path="/repositories" element={<Repos />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/following" element={<Following />} />
            </Routes>
          </main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
