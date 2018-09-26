import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/var'
import '@/styles/mixins'
import Admin from './admin'
import RouteExample from '@/pages/demo/route1'
import IRouter from '@/pages/demo/router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IRouter />, document.getElementById('root'));
registerServiceWorker();
