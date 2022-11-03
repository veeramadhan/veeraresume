import React from 'react';
import Header from './component/Header/Header';
import TopContainer from './component/TopContainer/TopContainer';
import SkillsContainer from './component/SkillsContainer/SkillsContainer';
import CertificationContainer from './component/CertificationContainer/CertificationContainer';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
       <Header/>
       <TopContainer/>
       <SkillsContainer/>
       <CertificationContainer />
       <Contact/>
    </div>
  );
}


export default App;