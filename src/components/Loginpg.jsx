import React from 'react'

function Loginpg() {
  return (
   <>
   {/* Hero Section */}
{/* Hero Section */}
{/* Hero Section */}
<section id="home" className="h-screen bg-cover bg-center relative" 
    style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlT6v658ElF-jYCIKryjWM7src5oKMGmhaaQ&s)' }}>
    <div className="absolute inset-0 bg-black opacity-25"></div>
    <div className="container mx-auto h-full flex items-center justify-center text-center relative z-10">
        {/* <div className="bg-white  p-8 rounded-lg" style={{ backdropFilter: 'blur(5px)' }}> */}
        <div>
            {/* <h1 className="text-4xl font-bold mb-4">Welcome to Rentify</h1> */}
            <h1>Welcome to Rentify</h1>
            <p className="text-lg mb-4">India's first clothes online rental website</p>
            <a href="#shop" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Shop Now</a>
        </div>
    </div>
</section>



   </>
  )
}

export default Loginpg