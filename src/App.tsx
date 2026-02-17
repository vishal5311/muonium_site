import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Studios from "./pages/Studios";
import Gaming from "./pages/Gaming";
import Media from "./pages/Media";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import AvatarUpload from "./components/AvatarUpload"; // Temporary import for testing blob upload

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
        <Route path="/upload" element={
          <div className="min-h-screen pt-24 pb-12 px-4 bg-black">
            <AvatarUpload />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
