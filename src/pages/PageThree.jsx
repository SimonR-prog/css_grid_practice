import React from 'react'
import Cards_Three from '../components/Cards_Three'

const PageThree = () => {
  

  return (
    <>
      <main className='main-three'>
        <header className='header-three'>
          
          <p>Header</p>

        </header>
        <aside className='aside-three'>

          <p>Aside</p>

        </aside>
        <section className='section-three'>

          <Cards_Three />

        </section>
        <footer className='footer-three'>
          
          <p>Footer</p>

        </footer>
      </main>
      
    </>
  )
}

export default PageThree