import React from 'react'
import classes from './App.module.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux'
import Nav from './Components/Header/Header'
import Home from './Components/Home/HomeContainer'
import Footer from './Components/Footer/Footer'
import { LazyComponentHOC } from './HOC/LazyComponent'
import ContactContainer from './Components/Contact/ContactContainer'

const About = React.lazy(() => import('./Components/AboutMe/AboutMeContainer'))
const Work = React.lazy(() => import('./Components/Work/WorkContainer'))
const Contact = React.lazy(() => import('./Components/Contact/ContactContainer'))

const App = () => {
  return (
    <div className={classes.appWraper}>
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <Switch>
            <Route path='/home' render={() => <Home />} />
            <Route path='/work/:projectId?' render={() => LazyComponentHOC(Work)} />
            <Route path='/about' render={() => LazyComponentHOC(About)} />
            <Route path='/contact' render={()=><ContactContainer/>} />
            {/*   
          <Route path='/process' render={()=>} />
          <Route path='/services' render={()=>} />
          <Route path='/testmonials' render={()=>} />
            */}
            <Route path='' render={() => <Redirect to='/home' />} />

          </Switch>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App