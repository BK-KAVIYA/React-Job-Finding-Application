import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/card';
import Jobs from './Jobs';

export const Home = () => {
  const [selectCategory,setSelectCategory]=useState(null);
  const [jobs,setJobs]=useState([]);

  
  useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>{
      setJobs(data)
    })
  },[])

  const[query,setQuery]=useState('')
  const handleInputChange=(e)=>{
     setQuery(e.target.value)
  }

  // filter job by title
  const filteredItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // Radio based button filtering
  const handleChange=(e)=>{
    setSelectCategory(e.target.value)
    
  }

  // Button based filtering function
  const handleClick=(e)=>{
    setSelectCategory(e.target.value)
    
  }


  //Main function
  const filterData=(jobs,selected,query)=>{
    let filteredJobs=jobs;
    if(query){
      filteredJobs=filteredItems;
    }
    if(selected){
      filteredJobs=filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employetype,postingdate})=>
        jobLocation.toLowerCase()===selected.toLowerCase() || 
        parseInt(maxPrice)<=parseInt(selected) || 
        salaryType.toLowerCase()===selected.toLowerCase() || 
        employetype.toLowerCase()===selected.toLowerCase() 
      )
    }
    console.log(filteredJobs)    
    return filteredJobs.map((data,i)=><Card key={i} data={data}/>)
  }

  const result=filterData(jobs,selectCategory,query)
  console.log(result)
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        <div className='bg-white p-4 rounded'>Left</div>
        <div className='col-span-2 bg-white rounded-sm'><Jobs result={result}/></div>
        <div className='bg-white p-4 rounded'>Right</div>       
      </div>
    </div>
  )
}

export default Home;
