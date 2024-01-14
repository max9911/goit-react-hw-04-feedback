import React, { Component } from 'react';
import { Section } from './section/section';
import Feedback from './feedback/feedback';
import Stats from './stats/stats';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  oneClick = evt => {
    const id = evt.target.id;
    this.setState(prev => ({
      [id]: prev[id] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            oneClick={this.oneClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Stats data={this.state} />
        </Section>
      </>
    );
  }
}

export default App;
