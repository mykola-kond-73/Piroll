import React from 'react'
import classes from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux'
import Nav from './Components/Header/Header'
import Home from './Components/Home/HomeContainer'
import Footer from './Components/Footer/Footer'
import WorkContainer from './Components/Work/WorkContainer'

const App = () => {
  return (
    <div className={classes.appWraper}>
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <Switch>
            <Route path='/home' render={() => <Home />} />
            <Route path='/work/:projectId?' render={() => <WorkContainer />} />
            {/*   
          <Route path='/about' render={()=>} />
          <Route path='/process' render={()=>} />
          <Route path='/services' render={()=>} />
          <Route path='/testmonials' render={()=>} />
          <Route path='/contact' render={()=>} />  */}
          </Switch>
          {/* <Footer/> */}
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App