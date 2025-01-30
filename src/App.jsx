import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Programs from './pages/Programs';
import BenefitsSection from './components/Benefits/BenefitsSection';
import ContactSection from './components/Contact/ContactSection';
import EmergingLeadersProgram from './pages/minipages/EmergingLeadersProgram';
import NewManagersProgram from './pages/minipages/NewManagersProgram';
import RisingProfessionalsProgram from './pages/minipages/RisingProfessionalsProgram';
import LegacyLeadersProgram from './pages/minipages/LegacyLeadersProgram';


function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
       <Route path="/managers" element={<NewManagersProgram />} />
        <Route path="/emerging" element={<EmergingLeadersProgram />} />
        <Route path="/legacy" element={<LegacyLeadersProgram />} />
        <Route path="/rising" element={<RisingProfessionalsProgram />} />
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/contact" element={ <ContactSection  />} />

        


      </Routes>
    </Router>
  );
}

export default App;