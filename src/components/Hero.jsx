// // src/components/Products.js
// import React from 'react';

// function Products() {
//   return (
//     <section id="shop" className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        
//         {/* First Product Section */}
//         <div className="flex flex-col md:flex-row items-center mb-8">
//           <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
//             <h3 className="text-xl font-bold mb-2">Product 1</h3>
//             <p className="text-gray-700 mb-4">This is a description of Product 1.</p>
//             <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Product</a>
//           </div>
//           <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
//             <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-64 object-cover mb-4 rounded-lg"/>
//           </div>
//         </div>

//         {/* Second Product Section */}
//         <div className="flex flex-col md:flex-row items-center mb-8">
//           <div className="w-full md:w-1/2 p-4">
//             <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-64 object-cover mb-4 rounded-lg"/>
//           </div>
//           <div className="w-full md:w-1/2 p-4">
//             <h3 className="text-xl font-bold mb-2">Product 2</h3>
//             <p className="text-gray-700 mb-4">This is a description of Product 2.</p>
//             <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Product</a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Products;


// src/components/Products.js
// import React from 'react';

// function Products() {
//   return (
//     <>
//     <section id="shop" className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        
//         {/* First Product Section */}
//         <div className="flex flex-col md:flex-row items-center mb-8">
//           <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
//             <h3 className="text-4xl mb-2">Bridal Lehenga</h3><br/>
//             <h3 className="text-4xl mb-2">Designer Lehenga</h3><br/>
//             <h3 className="text-4xl mb-2">Gowns</h3><br/><br/><br/>
            
            
//             {/* <p className="text-gray-700 mb-4">This is a description of Product 1.</p> */}
//             <a href="#" className="bg-black text-white text-xl py-5 px-16 rounded hover:bg-gray-500">Women</a>
//           </div>
//           <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
//             <img src="https://images.pexels.com/photos/24425140/pexels-photo-24425140/free-photo-of-model-in-a-blue-choli-blouse-and-lehenga-skirt.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product 1" className="w-full h-96 object-cover mb-4 rounded-lg"/>
//           </div>
//         </div>

//         {/* Second Product Section */}
//         <div className="flex flex-col md:flex-row items-center mb-8">
//           <div className="w-full md:w-1/2 p-4">
//             <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-96 object-cover mb-4 rounded-lg"/>
//           </div>
//           <div className="w-full md:w-1/2 p-32">
//           <h3 className="text-4xl mb-2">Sherwani</h3><br/>
//             <h3 className="text-4xl mb-2">Blazers</h3><br/>
//             <h3 className="text-4xl mb-2">Suits</h3><br/><br/><br/>
//             {/* <p className="text-gray-700 mb-4">This is a description of Product 2.</p> */}
//             <a href="#" className="bg-black text-white text-3xl py-5 px-16 rounded hover:bg-gray-500">Men</a>
//           </div>
//         </div>

//       </div>
//     </section>
    
//     <section id="shop2" className="py-16">
//       <div className="container mx-auto">
//         {/* <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2> */}
        
//         <div className="flex flex-wrap -mx-4 justify-center">
//           {/* First Product Section */}
//           <div className="w-full md:w-1/2 p-4 flex items-center mb-8">
//             <div className="w-full">
//               <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-[35rem] object-cover rounded-lg"/>
//             </div>
//           </div>

//           {/* Second Product Section */}
//           <div className="w-full md:w-1/2 p-4 flex items-center mb-8">
//             <div className="w-full">
//               <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-[35rem] object-cover rounded-lg"/>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
 



//     </>
//   );
// }

// export default Products;
import React from 'react';

const images = [
  'https://images.pexels.com/photos/12737613/pexels-photo-12737613.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace these with your image URLs
  'https://images.pexels.com/photos/11702815/pexels-photo-11702815.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6687162/pexels-photo-6687162.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/12737635/pexels-photo-12737635.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13022464/pexels-photo-13022464.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13204680/pexels-photo-13204680.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/11705083/pexels-photo-11705083.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://via.placeholder.com/150/FFFF00/000000?Text=Box8',
  'https://images.pexels.com/photos/7051198/pexels-photo-7051198.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://via.placeholder.com/150/FF00FF/00FFFF?Text=Box10',
  'https://via.placeholder.com/150/0000FF/808080?Text=Box11',
  'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Box12',
  'https://via.placeholder.com/150/FFFF00/000000?Text=Box13',
  'https://via.placeholder.com/150/00FF00/0000FF?Text=Box14',
  'https://via.placeholder.com/150/FF00FF/00FFFF?Text=Box15',
  'https://via.placeholder.com/150/0000FF/808080?Text=Box16',
  'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Box17',
  'https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/12655158/pexels-photo-12655158.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13266799/pexels-photo-13266799.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://via.placeholder.com/150/0000FF/808080?Text=Box21',
  'https://images.pexels.com/photos/11747743/pexels-photo-11747743.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://via.placeholder.com/150/FFFF00/000000?Text=Box23',
  'https://via.placeholder.com/150/00FF00/0000FF?Text=Box24',
];

const BoxLayout = () => {
  return (
    <div className="container mx-auto pt-20 p-4 bg-black">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-10">
          {Array.from({ length: 4 }).map((_, boxIndex) => (
            <div
              key={boxIndex}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48 bg-white text-white flex items-center justify-center rounded-lg transition-transform transform hover:scale-110 m-2"
            >
              <img
                src={images[rowIndex * 4 + boxIndex]}
                alt={`Box ${rowIndex * 4 + boxIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoxLayout;




    // <div className="flex flex-col items-center space-y-4">
    //   {Array.from({ length: 3 }).map((_, rowIndex) => (
    //     <div key={rowIndex} className="flex space-x-4">
    //       {Array.from({ length: 5 }).map((_, boxIndex) => (
    //         <div
    //           key={boxIndex}
    //           className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform transform hover:scale-110"
    //         >
    //           Box {rowIndex * 5 + boxIndex + 1}
    //         </div>
    //       ))}
    //     </div>
    //   ))}
    // </div>
 