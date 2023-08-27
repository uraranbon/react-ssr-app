import React from 'react';

interface MainProps {
  content: string;
}

const Main: React.FC<MainProps> = ({ content }) => {
  return <main><p className='text'>{content}</p></main>;
};

export default Main;


