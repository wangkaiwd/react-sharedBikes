import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/var'
import '@/styles/mixins'
import Admin from './admin'
import RouteExample from '@/pages/demo/route1'
import Theme from '@/pages/demo/themeChange'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
