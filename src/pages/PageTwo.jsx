import React from 'react'
import Section_comp from './../components/section_comp';
import Aside_comp from './../components/Aside_comp';
import Footer_comp from './../components/Footer_comp';
import Header_comp from './../components/Header_comp';


//Making the same layout from components.


const PageTwo = () => {
  return (
    <>
      <main className='main-two'>
        <Header_comp />
        <Aside_comp />
        <Footer_comp />
        <Section_comp />
      </main>
    </>
  )
}

export default PageTwo