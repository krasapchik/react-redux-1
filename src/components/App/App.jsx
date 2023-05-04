
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavbarMenu from "../NavbarMenu/NavbarMenu";
import AboutPage from "../../pages/AboutPage/AboutPage";
import NewsPage from "../../pages/NewsPage/NewsPage";
import MenuPage from "../../pages/MenuPage/MenuPage";

const App = () => {
  return (
    <Router>
      <div></div>
      <NavbarMenu />
      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/news" element={<NewsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
