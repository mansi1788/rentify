import React from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
import Navbar from './components/Navbar'
 import Loginpg from './components/Loginpg';
import Hero from './components/Hero';
import About from './components/About';
 import Footer from './components/Footer';
 import '@fortawesome/fontawesome-free/css/all.min.css';
import {Routes,Route} from 'react-router-dom'
import ClothesDetails from './components/ClothesDetails';
import Clothes__List from './components/Clothes__List';
import Favorites from './components/Favorites';



function App() {
  // const handleSearch = (query) => {
  //   console.log('Search query:', query);
  //   // Add your search logic here
  // };

  return (
    // <div className="bg-black">
    //   <
    //   <SearchBar onSearch={handleSearch} />

    //   <Navbar/>
    //   <Hero/>
    //  <About/>
    //  <Footer/>
    // </div>
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Clothes__List/>} />
        <Route path='/products/:id' element={<ClothesDetails/>} />
        <Route path='/favorites' element={<Favorites/>} />

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

