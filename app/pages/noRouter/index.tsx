import React, {useState, useEffect} from 'react'
import Timer from '@components/timer'

const Inbox = () => {
  return (
    <div>inbox</div>
  )
}

const Home = () => {
  return (
    <div>home</div>
  )
}

const NoRouter = () => {
  const [child, setChild] = useState(window.location.hash.substr(1))

  useEffect (() => {
    window.addEventListener('hashchange', () => {
      setChild(window.location.hash.substr(1))
    })
  })

  let Child;
  switch (child) {
    case '/timer': Child = Timer; break;
    case '/inbox': Child = Inbox; break;
    default:      Child = Home;
  }

  return (
    <div>
      <h1>example</h1>
      <ul>
        <li><a href="#/timer">Timer</a></li>
        <li><a href="#/inbox">Inbox</a></li>
      </ul>
      <Child />
    </div>
  )
}

export default NoRouter