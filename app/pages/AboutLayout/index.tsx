import React from 'react'

const About = ({location, match, history}:any) => {
  console.log(match)
  return (
    <div>
      <header>About page</header>
      <main>
        <p>路由参数:{match.params.id}</p>
        <button onClick={() => {history.push('/users')}}>前往users</button>
      </main>
    </div>
  )
}

export default About