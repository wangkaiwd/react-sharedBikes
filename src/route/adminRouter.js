import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Admin from '../admin'
import Home from '@/pages/home'
import NoMatch from '@/pages/noMatch'
import IButton from '@/pages/ui/buttons'
import IModal from '@/pages/ui/modals'
export default () => (
  <Admin>
    {/* Switch:只要匹配到对应的路径，就不会继续再往下匹配了 */}
    <Switch>
      <Route path="/admin/home" component={Home} />
      <Route path="/admin/ui/buttons" component={IButton} />
      <Route path="/admin/ui/modals" component={IModal} />
      <Route component={NoMatch} />
    </Switch>
  </Admin>
)
