import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomeApp from './components/Home/App'
import ResumeApp from './components/Resume/App'
import PortfolioApp from './components/Portfolio/App'

const router = () => (
  <Router>
    <div>
        {
            /*
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">resume</Link></li>
            </ul>
            <hr/>
            */
        }

        <Route exact path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
    </div>
  </Router>
)

const Home = () => (
  <HomeApp />
)

const Resume = () => (
  <ResumeApp />
)

const Portfolio = () => (
    <PortfolioApp />
)

export default router
