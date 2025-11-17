import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App