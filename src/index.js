import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto'
import PersistentDrawer from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <PersistentDrawer />, 
  document.getElementById('root')
);
registerServiceWorker();
