import React, { useState } from 'react';
import Home from './pages/Home';
import Section from './pages/Section';
import Result from './pages/Result';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selections, setSelections] = useState([null, null, null]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleSelection = (sectionIndex, selection) => {
    const newSelections = [...selections];
    newSelections[sectionIndex] = selection;
    setSelections(newSelections);


    if (sectionIndex < 2) {
      handleNavigate(`section${sectionIndex + 2}`);
    } else {
      handleNavigate('result');
    }
  };

  const RenderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={() => handleNavigate('section1')} />;
        case 'section1':
          return <Section sectionIndex={0} onBack={() => handleNavigate('home')} onSelect={handleSelection} />;
        case 'section2':
          return <Section2 sectionIndex={1} onBack={() => handleNavigate('section1')} onSelect={handleSelection} />;
        case 'section3':
          return <Section3 sectionIndex={2} onBack={() => handleNavigate('section2')} onSelect={handleSelection} />;    
      case 'result':
        return <Result selections={selections} onBack={() => handleNavigate('home')} />;
      default:
        return <Home onNavigate={() => handleNavigate('section1')} />;
    }
  };

  return (
    <>
      <div className='grid-template grid grid-rows-[auto_1fr_1fr] sm:grid-rows-[auto_1fr_auto]  justify-items-center items-baseline min-h-full h-screen sm:h-auto'>
        <Navbar />
        <RenderPage>
          <div>{RenderPage()}</div>
        </RenderPage>
        <Footer />
      </div>
    </>
  );
};

export default App;

