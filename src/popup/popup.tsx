import '../css/app.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('popup-entry'));
});
