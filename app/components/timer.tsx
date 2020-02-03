import React from 'react'
import styles from './index.less'
// import styles from './index.css'
import logo from '../static/123.png'

const Timer = (props:any) => {
  function clk () {
    console.log('6666')
    // debugger
    opt()
  }

  function opt () {
    // debugger
    console.log(555555)
  }

  function drag (event:any) {
    console.log(event)
  }

  return (
    <div>
      <p onClick={() => clk()} className={styles.bar}>byx</p>
      <img src={logo} alt=""/>
      <div draggable="true" style={{width:'200px',height:'200px',background:'yellow'}} onDrag={() => drag(event)}></div>
      {props.children}
    </div>
  )
}

export default Timer