import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MessageBox from "./pages/MessageBox";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "Bookmark Manager";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Bookmark Manager";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "Bookmark Manager";
        metaDescription = "";
        break;
      case "/sign-up/success":
        title = "Bookmark Manager";
        metaDescription = "";
        break;
      case "/error":
        title = "Bookmark Manager";
        metaDescription = "";
        break;
      case "/login":
        title = "Bookmark Manager";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/success" element={<MessageBox />} />
      <Route path="/error" element={<MessageBox />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
