//import React, { useState } from 'react'
//import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GIthub() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Manjitkumarsahoo')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  return (
    <div className="text-center bg-blue-600 p-4 text-white text-3xl">
  <p>GitHub Followers: {data.followers}</p>
  <img src={data.avatar_url} alt="GitHub Avatar" width={100} className="mx-auto mt-4 rounded-full" />
</div>

  )
}

export default GIthub

export const githubinfoloader = async () => {
  const response = await fetch('https://api.github.com/users/Manjitkumarsahoo')
  return response.json()
}