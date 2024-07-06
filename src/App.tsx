import React from 'react';
import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButton';

type GeneratedWordsProps = {
  words: string;
};

const GeneratedWords = (props: GeneratedWordsProps) => {
  return (
    <div className='text-4xl text-center text-slate-500'>{props.words}</div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className='text-primary-400 font-medium'>Time: {timeLeft}</h2>;
};

const App = () => {
  const words = faker.word.words(10);

  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
      <RestartButton
        className={'mx-auto mt-10 text-slate-500'}
        onRestart={() => null}
      />
    </>
  );
};
export default App;
