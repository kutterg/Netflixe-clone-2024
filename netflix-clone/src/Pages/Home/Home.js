// rafce 
import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Rowlist from '../../Components/Rows/Rowlist/Rowlist';

const Home = () => {
  return (
    <>
        <Header />
        <Banner/>
        <Rowlist/>
        
        <Footer />
    </>//we have render in app.js to display on browser
  )
}

export default Home;//we have go to render on app.js




