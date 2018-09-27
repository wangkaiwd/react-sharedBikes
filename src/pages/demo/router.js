import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import Main from './main'
import ExampleRoute2 from './route2'
const Page404 = () => {
  return <div>404NotFound</div>
}
// class IRouter extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   render() {
//     return (
//       <Router>
//         <ExampleRoute2>
//           <Switch>
//             <Route path="/app" render={() => (
//               <Home>
//                 <Route path="/app/home" component={Main} />
//               </Home>
//             )} />
//             <Route path="/about" component={About} />
//             <Route path="/topics" component={Topics} />
//             {/* 必须和Switch进行配合使用，当写入的路由都没有匹配时进行展示404 */}
//             {/* 如果没有Switch的话，会导致每个页面都匹配404 */}
//             <Route component={Page404} />
//           </Switch>
//         </ExampleRoute2>
//       </Router>
//     )
//   }
// }
export default () => (
  <Router>
    <ExampleRoute2>
      <Switch>
        <Route path="/app" render={() => (
          <Home>
            <Route path="/app/home" component={Main} />
          </Home>
        )} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        {/* 必须和Switch进行配合使用，当写入的路由都没有匹配时进行展示404 */}
        {/* 如果没有Switch的话，会导致每个页面都匹配404 */}
        <Route component={Page404} />
      </Switch>
    </ExampleRoute2>
  </Router>
)
