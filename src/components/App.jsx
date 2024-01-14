import { Section } from './section/section';
import Feedback from './feedback/feedback';
import Stats from './stats/stats';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const data = { good, neutral, bad };

  const oneClick = evt => {
    const id = evt.target.id;
    id === 'good' && setGood(prev => prev + 1);
    id === 'neutral' && setNeutral(prev => prev + 1);
    id === 'bad' && setBad(prev => prev + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback oneClick={oneClick} options={Object.keys(data)} />
      </Section>
      <Section title="Statistics">
        <Stats data={data} />
      </Section>
    </>
  );
};

export default App;
