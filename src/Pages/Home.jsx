import React, { useState } from 'react'
import Banner from '../components/Banner/Banner';

export const Home = () => {
  const[query,setQuery]=useState('')
  const handleInputChange=(e)=>{
     setQuery(e.target.value)
  }

  return (
    <Banner query={query} handleInputChange={handleInputChange}/>
  )
}

export default Home;
