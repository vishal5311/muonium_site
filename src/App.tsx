import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Studios from "./pages/Studios";
import Gaming from "./pages/Gaming";
import Media from "./pages/Media";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studios" element={<Studios />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/media" element={<Media />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
