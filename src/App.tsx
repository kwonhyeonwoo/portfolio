import { Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/Home/containers/HomeContainer";
import AboutContainer from "./pages/About/containers/AboutContainer";
import Contact from "./pages/Contact/Contact";
import ContactContainer from "./pages/Contact/containers/ContactContainer";
import ExperienceContainer from "./pages/Experience/containers/ExperienceContainer";
import IndividualProjectContainer from "./pages/Projects/containers/IndividualProjectContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path='/about' element={<AboutContainer />} />
      <Route path='/contact' element={<ContactContainer />} />
      <Route path='/experience' element={<ExperienceContainer />} />
      <Route path='/projects/individual' element={<IndividualProjectContainer />} />
    </Routes>
  );
}

export default App;
