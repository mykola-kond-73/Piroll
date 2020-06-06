import React from 'react'
import classes from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className={classes.appWraper}>
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <Switch>
            {/* <Route path='/home' render={()=>} />
          <Route path='/about' render={()=>} />
          <Route path='/work' render={()=>} />
          <Route path='/process' render={()=>} />
          <Route path='/services' render={()=>} />
          <Route path='/testmonials' render={()=>} />
          <Route path='/contact' render={()=>} /> */}
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App