import { Route, Routes } from "react-router-dom";
import "./config/core.css"
import HomeContainer from "./pages/Home/containers/HomeContainer";
import AboutContainer from "./pages/About/containers/AboutContainer";
import ContactContainer from "./pages/Contact/containers/ContactContainer";
import ExperienceContainer from "./pages/Experience/containers/ExperienceContainer";
import IndividualProjectContainer from "./pages/Projects/containers/IndividualProjectContainer";
import HeaderContainer from "./components/Header/containers/HeaderContainer";
import FooterContainer from "./components/Footer/containers/FooterContainer";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path='/about' element={<AboutContainer />} />
        <Route path='/contact' element={<ContactContainer />} />
        <Route path='/experience' element={<ExperienceContainer />} />
        <Route path='/projects/individual' element={<IndividualProjectContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
