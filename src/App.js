import { HashRouter as Router, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Header from './Header'
import CreateMemo from './CreateMemo'
import Dashboard from './DashBoard'
import NavDashboard from './NavDashboard'
import Memo from './Memo'
import NavMemo from './NavMemo'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={SignUp} />
      <Route path='/user' component={NavDashboard} />
      <Route exact path='/user/dashboard' component={Dashboard} />
      <Route exact path='/user/create-memo' component={CreateMemo} />
      <Route path='/memo' component={NavMemo} />
      <Route exact path='/memo' component={Memo}/>
    </Router>
  );
}

export default App;
