import * as React from 'react';
import { useTabs } from '../hooks/useTabs';

const App = () => {
  const tabs = useTabs();
  return (
    <div>
      <h4>Hello World</h4>
      {tabs.map((tab) => (
        <div>
          <div>{tab.title}</div>
          <div>{tab.url}</div>
          <div>{tab.favIconUrl}</div>
          <div>{tab.windowId}</div>
          <div>{tab.id}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
