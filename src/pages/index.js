import React, { useState } from "react"
import {shuffle,chunk} from 'lodash'
import logo from "../../static/logo.jpeg" // Tell Webpack this JS file uses this image

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'flex-start',
    '&': {
      backgroundColor:"red"
    }
  }
}

export default () => {
  const [v, setValue] = useState("")
  const [result, setResult] = useState([])

  const go = () => {
    setResult(chunk(shuffle(v.split(',').map(s => s.trim())), 2))

  }

  return <div style={styles.container}>
    <h1>Roominator</h1>
    <img src={logo}/>
    <p>Enter people, comma separated</p>
    <input type={"text"} value={v} onChange={(e) => setValue(e.target.value)} />
    <button onClick={go}>go</button>
    <textarea readOnly value={JSON.stringify(result).replace(/"/g, "")}/>

  </div>
}
