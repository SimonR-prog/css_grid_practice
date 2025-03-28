import React, { useEffect, useState } from 'react'

const Cards_Three = () => {
    const [data, setData] = useState([])

  const getData = async () => {
    const result = await fetch('/file.json')
    if (!result.ok) {
        console.log("Can't get the json file.")
    }
    const data = await result.json();

    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='card'>
        {data.map((item) => (
            <card key={item.id}>
                <img src="" alt="" />
                <h3>{item.projectName}</h3>
                <p>{item.description}</p>
                <button className='btn'>Github</button>
            </card>
        ))}

    </div>
  )
}

export default Cards_Three