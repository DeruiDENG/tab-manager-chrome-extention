import { useEffect, useState } from 'react';
import { getTabs } from '../../shared/services/tabs';

export function useTabs(): chrome.tabs.Tab[] {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);
  useEffect(() => {
    getTabs().then((tabs) => setTabs(tabs));
  });

  return tabs;
}
