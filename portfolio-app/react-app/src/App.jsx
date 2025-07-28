import React from 'react';
import EnTete from './components/EnTete';
import APropos from './components/APropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Education from './components/Education';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import PiedDePage from './components/PiedDePage';

function App() {
  return (
    <div>
      <EnTete />
      <APropos />
      <Competences />
      <Projets />
      <Education />
      <Hobbies />
      <Contact />
      <PiedDePage />
    </div>
  );
}

export default App;
