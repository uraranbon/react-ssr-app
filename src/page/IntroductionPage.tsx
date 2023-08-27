import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import '../index.css';

const IntroductionPage: React.FC = () => {
  return (
    <div className='content'>
      <Header title="uraranbon" />
      <Main content="Made with React and TypeScript" />
    </div>
  );
};

export default IntroductionPage;