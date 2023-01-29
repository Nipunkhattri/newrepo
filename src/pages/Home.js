import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const currentuser = useSelector((state)=>(state.currentUserreducer))
    console.log(currentuser);
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
