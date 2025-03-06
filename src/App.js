// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Main from "./pages/Main";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Home/Main";
import Menu from "./pages/Menu/Menu";
import Reservations from './pages/Reservations/Reservations';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;