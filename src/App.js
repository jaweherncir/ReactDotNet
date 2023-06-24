import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import RecruiterPage from './RecruiterPage';
import CandidatePage from './CandidatePage';
import RegistrationForm from './RegistrationForm';
import CVForm from './CVForm';
import VideoChat from './VideoChat';
import JobPostingForm from './JobPostingForm';
import ContactForm from './ContactForm';
import InterviewCalendar from './InterviewCalendar';
import JobApplicationForm from './JobApplicationForm';
import RegisterSocieteForm from './registration/RegisterSocieteForm';
import AvisJobs from './Job/AvisJobs';
import Templat from './components/Templat';
import PublierCV from './Job/PublierCV';
import TestTechnique from './Job/TestTechnique';
import RegisterCondidat from './registration/RegisterCondidat';
import LoginCondidat from './login/LoginCondidat';
import LoginSoc from './login/LoginSoc';
import PageAccueil from './societe/PageAccueil';
import NouvelleOffre from './societe/NouvelleOffre';
import ListeCondidatParOffre from './societe/ListeCondidatParOffre';
import Condidature from './societe/Condidature';



function App() {
  return (
    <Router>
  
      <Routes>
      <Route path="/" element={<Templat />} />
    
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/recruiter" element={<RecruiterPage />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/registersc" element={<RegisterSocieteForm />} />
        <Route path="/condidatcv" element={<CVForm />} />
        <Route path="/jobcontact" element={<ContactForm />} />
        <Route path="/jobchat" element={<VideoChat />} />
        <Route path="/jobcalender" element={<InterviewCalendar />} />
        <Route path="/jobpost" element={< JobPostingForm/>} />
        <Route path="/jobjoin" element={<JobApplicationForm />} />




        <Route path="/AvisJobs" element={<AvisJobs />} />
        <Route path="/PublierCV" element={<PublierCV />} />
        <Route path="/TestTechnique" element={<TestTechnique />} />
        <Route path="/RegisterCondidat" element={<RegisterCondidat />} />
        <Route path="/LoginCondidat" element={<LoginCondidat />} />
        <Route path="/LoginSoc" element={<LoginSoc />} />


        <Route path="/PageAccueil" element={<PageAccueil />} />
        <Route path="/NouvelleOffre" element={<NouvelleOffre />} />
        <Route path="/ListeCondidatParOffre" element={<ListeCondidatParOffre />} />
        <Route path="/Condidature" element={<Condidature />} />
      </Routes>
    </Router>
  );
}

export default App;
