import React from 'react';
import ReactDOM from 'react-dom';

// store
import store from './store.js';
import {Provider} from 'react-redux';

// component 
import App from './components/app.js';

// css
import  './app.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
