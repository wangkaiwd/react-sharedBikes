import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/var'
import '@/styles/mixins'
import '@/styles/reset.less'

import Admin from './admin'
import RouteExample from '@/pages/demo/route1'
import IRouter from '@/pages/demo/router'
import RouteConfig from '@/route'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
registerServiceWorker();
