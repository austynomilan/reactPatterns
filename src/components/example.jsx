import React, { useState } from 'react';
import TabButton from '../components/tabButton';
import { EXAMPLES } from '../data';
import Section from './section';
import Tabs from './tabs';

export default function example() {
  const [selectedTopic, setSelectedTopic] = useState();

  const details = 'select a topic';

  const output = !selectedTopic ? (
    details
  ) : (
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  const handleelct = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
      <Section title='Examples' id='examples'>
        <Tabs
          buttons={
            <>
                <TabButton
                  onSlected={selectedTopic === 'components'}
                  onClick={() => handleelct('components')}
                >
                  Components
                </TabButton>
                <TabButton
                  onSlected={selectedTopic === 'jsx'}
                  onClick={() => handleelct('jsx')}
                >
                  Jsx
                </TabButton>
                <TabButton
                  onSlected={selectedTopic === 'props'}
                  onClick={() => handleelct('props')}
                >
                  Props
                </TabButton>
                <TabButton
                  onSlected={selectedTopic === 'state'}
                  onClick={() => handleelct('state')}
                >
                  State
                </TabButton>
            </>
          }
        >
          {output}
        </Tabs>
      </Section>
  );
}
