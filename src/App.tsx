import React from 'react';
import { faker } from '@faker-js/faker';

type GeneratedWordsProps = {
  words: string;
};

const GeneratedWords = (props: GeneratedWordsProps) => {
  return (
    <div className='text-4xl text-center text-slate-500'>{props.words}</div>
  );
};

const App = () => {
  const words = faker.word.words(10);

  return <GeneratedWords words={words} />;
};
export default App;
