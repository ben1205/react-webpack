import React from 'react'
import {Switch, Route} from 'react-router-dom'

const Users = ({match, history, location, ...rest}:any) => {
  console.log(rest)
  return (
    <div>
      <header>Users page</header>
      <main>
        <button onClick={() => {history.push('/about')}}>前往about</button>
      </main>
      {match.path}
      <Switch>
          {/* <Route path={match.path} exact component={Users} /> */}
          <Route path={`${match.path}/:userId`} component={UserProfile} />
      </Switch>
    </div>
  )
}

const UserProfile = () => <div>用户详情页</div>
export default Users