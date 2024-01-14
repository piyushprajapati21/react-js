import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

const[data,setData] = useState([]);
useEffect( () => {
        fetch('https://api.github.com/users/piyushprajapati21')
        .then( response => response.json()  )
        .then( data => {
            setData(data);
        })
}, [])

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github Followers : {data.followers}
        <img className='text-center' src={data.avatar_url} width={200} alt='Git Picture'></img>
    </div>
  )
}

export default Github