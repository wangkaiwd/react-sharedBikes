import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/var'
import '@/styles/mixins'
import Admin from './admin'
import RouteExample from '@/pages/demo/route1'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteExample />, document.getElementById('root'));
registerServiceWorker();
