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
    <>
      <div className='card'>
        {data.map((item) => (
          <div className='card-item' key={item.id}>
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              <img 
                className="card-item-img" 
                src={item.imageUrl} 
                alt={item.projectName} />
            </a>
              <h3 className="card-item-title">{item.projectName}</h3>
              <p className="card-item-text">{item.description}</p>
              </div>
            ))}
        </div>
    </>
  )
}

export default Cards_Three