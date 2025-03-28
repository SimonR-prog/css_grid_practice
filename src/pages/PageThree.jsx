import React, { useEffect, useState } from 'react'

const PageThree = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const result = await fetch('/options.json')
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
      <main className='main-three'>
        <header className='header-three'></header>
        <aside className='aside-three'></aside>
        <section className='section-three'>
          <div></div>
          <div></div>
        </section>
        <footer className='footer-three'></footer>
      </main>
      
    </>
  )
}

export default PageThree