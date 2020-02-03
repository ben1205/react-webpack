import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import getRouter from '@configs/router.config'
import About from '@pages/AboutLayout'
import Users from '@pages/UsersLayout'

const PrimaryLayout = (props:any) => (
  <div>
    {/* <header>
      Our React Router 4 App
    </header> */}
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  </div>
)

const HomePage = () => <div>首页,这是首页,宝贝儿</div>

const Home = () => {
  return (
    <Router>
      <PrimaryLayout />
    </Router>
  )
}

export default Home