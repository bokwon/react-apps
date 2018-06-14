import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './App';
import WelcomeDialog from './Dialog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('root1'));

registerServiceWorker();
