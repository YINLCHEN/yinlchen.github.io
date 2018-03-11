import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import IndexApp from './components/Index/App'
import HomeApp from './components/Home/App'
import AboutApp from './components/About/App'
import ResumeApp from './components/Resume/App'
import PortfolioApp from './components/Portfolio/App'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-114915898-1');
ReactGA.pageview(window.location.pathname);

const router = () => (
  <Router>
    <div>
        {/*
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/portfolio">portfolio</Link></li>
        </ul>
        <hr/>
        */}
        <Route exact path="/" component={IndexPage} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
    </div>
  </Router>
)

const IndexPage = () => (
    <IndexApp />
)

const Home = () => (
    <HomeApp />
)

const About = () => (
    <AboutApp />
)

const Resume = () => (
  <ResumeApp url='/resume' pollInterval={10000}/>
)

const Portfolio = () => (
    <PortfolioApp url='/portfolio' pollInterval={10000}/>
)

export default router
