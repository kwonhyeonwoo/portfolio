import { Route, Routes } from "react-router-dom";
import "./config/core.css"
import HomeContainer from "./pages/Home/containers/HomeContainer";
import AboutContainer from "./pages/About/containers/AboutContainer";
import ExperienceContainer from "./pages/Experience/containers/ExperienceContainer";
import HeaderContainer from "./components/Header/containers/HeaderContainer";
import FooterContainer from "./components/Footer/containers/FooterContainer";
import ProjectsContainer from "./pages/Projects/containers/ProjectsContainer";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path='/about' element={<AboutContainer />} />
        <Route path='/projects' element={<ProjectsContainer />} />
        <Route path='/experience' element={<ExperienceContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
