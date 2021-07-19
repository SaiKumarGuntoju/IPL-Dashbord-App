import {Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
  </>
)

export default App
