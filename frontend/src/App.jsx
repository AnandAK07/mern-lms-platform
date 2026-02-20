import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Faculty } from "./pages/Faculty";
import { Courses } from "./pages/Courses";
import { CourseDetails } from "./pages/CourseDetails";
import CourseDetailHome from "./pages/CourseDetailHome";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// to protect the route
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return Boolean(token);
  };
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const ScrollTopButton = ({ threshould = 200, showOnMount = false }) => {
  const [visible, setVisible] = useState(!!showOnMount);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshould);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshould]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={
        "fixed right-6 bottom-6 z-50 p-2 rounded-full focus:outline-none focus:ring-sky-300" +
        "backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer transition-transform"
      }
    >
      <ArrowUp className="w-6 h-6 text-sky-600 drop-shadow-sm" />
    </button>
  );
};

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetailHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ScrollTopButton threshould={250} />
    </>
  );
}

export default App;
