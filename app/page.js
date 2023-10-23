"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
  const [users, setusers] = useState([])
  const getUsers = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  }
  return (
  <>
  <button onClick={getUsers}>Get DATA</button>
  <div className="blanko">
 <ul>
 { users.map((e) => {
      return <li>
      <h1> {e.username} ---- <a href={`/${e.id}`}>Explore</a></h1>
      </li>
    })}
 </ul>
  </div>
  </>
  )
}

export default page

