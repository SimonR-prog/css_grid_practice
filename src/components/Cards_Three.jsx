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
            <div className='card-item' key={item.id}>
                <img src="..\src\images\Project_images\project_img_1.svg" alt="" />
                <h3>{item.projectName}</h3>
                <p>{item.description}</p>
                <button className='btn'>Github</button>
            </div>
        ))}

    </div>
  )
}

export default Cards_Three