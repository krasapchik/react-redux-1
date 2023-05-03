import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AboutPage, MenuPage, NewsPage } from "../../pages";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const App = () => {
  return (
    <Router>
      <div></div>
      <NavbarMenu />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
