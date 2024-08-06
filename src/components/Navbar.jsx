// // import React,{useState} from 'react'
// // import { FaSearch, FaMale, FaFemale } from 'react-icons/fa';
// // const SearchBar = ({ onSearch }) => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [category, setCategory] = useState('Men');
// //   const [suggestions, setSuggestions] = useState([]);

// //   const handleInputChange = (e) => {
// //     const query = e.target.value;
// //     setSearchQuery(query);
// //     // Fetch or filter suggestions based on the query
// //     setSuggestions(
// //       query ? ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'].filter((item) =>
// //         item.toLowerCase().includes(query.toLowerCase())
// //       ) : []
// //     );
// //   };

// //   const handleCategoryChange = (e) => {
// //     setCategory(e.target.value);
// //   };

// //   const handleSearch = () => {
// //     if (onSearch) {
// //       onSearch({ query: searchQuery, category });
// //     }
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setSearchQuery(suggestion);
// //     setSuggestions([]);
// //     handleSearch();
// //   };


// // function Navbar() {
// //   return (
// //     <>


// // <div className="flex flex-col items-center w-full max-w-xl mx-auto">
// //       <div className="flex items-center w-full bg-white shadow rounded-lg overflow-hidden">
// //         <select
// //           value={category}
// //           onChange={handleCategoryChange}
// //           className="p-2 bg-gray-100 border-none focus:outline-none"
// //         >
// //           <option value="Men">
// //             <FaMale className="inline-block mr-1" /> Men
// //           </option>
// //           <option value="Women">
// //             <FaFemale className="inline-block mr-1" /> Women
// //           </option>
// //         </select>
// //         <input
// //           type="text"
// //           value={searchQuery}
// //           onChange={handleInputChange}
// //           placeholder="Search..."
// //           className="flex-grow p-2 border-none focus:outline-none"
// //         />
// //         <button
// //           onClick={handleSearch}
// //           className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors flex items-center justify-center"
// //         >
// //           <FaSearch />
// //         </button>
// //       </div>
// //       {suggestions.length > 0 && (
// //         <ul className="bg-white shadow rounded-lg mt-2 w-full transition-all duration-300">
// //           {suggestions.map((suggestion, index) => (
// //             <li
// //               key={index}
// //               onClick={() => handleSuggestionClick(suggestion)}
// //               className="p-2 hover:bg-gray-100 cursor-pointer"
// //             >
// //               {suggestion}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>



// //    <h1 className="p-9 border rounded-lg shadow-md text-center fixed top-0 left-0 w-full text-white bg-white z-50">
// //     {/* <ul className="flex justify-evenly items-center"> */}
// //         {/* <li className="inline mx-2 text-lg">BUY PRELOVED</li>
// //         <li className="inline mx-2 text-lg">RENT OUTFITS</li> */}
// //         {/* <li className="inline mx-2 text-lg"> */}
// //             <img src="https://images.pexels.com/photos/27441168/pexels-photo-27441168/free-photo-of-a-duck-swimming-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //              alt="Image Description" className="h-14 w-14 rounded-full" />
// //         {/* </li> */}
      
// //     {/* </ul> */}
// // </h1>
// // <div className="input-group">
// //       <div className="input-group-append">
// //         <span className="input-group-text" id="basic-addon">
// //           <i className="fa fa-user prefix"></i>
// //         </span>
// //       </div>
// //       <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
// //     </div>


// //     </>
// //   );
// // };

// // export default Navbar;






// // // import React, { useState } from 'react';
// // // import { FaSearch } from 'react-icons/fa';

// // // const Navbar = ({ onSearch }) => {
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [category, setCategory] = useState('Men');

// // //   const handleInputChange = (e) => {
// // //     setSearchQuery(e.target.value);
// // //   };

// // //   const handleCategoryChange = (e) => {
// // //     setCategory(e.target.value);
// // //   };

// // //   const handleSearch = () => {
// // //     if (onSearch) {
// // //       onSearch({ query: searchQuery, category });
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center p-4 w-full">
// // //       <select
// // //         value={category}
// // //         onChange={handleCategoryChange}
// // //         className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //       >
// // //         <option value="Men">Men</option>
// // //         <option value="Women">Women</option>
// // //       </select>
// // //       <input
// // //         type="text"
// // //         value={searchQuery}
// // //         onChange={handleInputChange}
// // //         placeholder="Search..."
// // //         className="flex-grow p-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //       />
// // //       <button
// // //         onClick={handleSearch}
// // //         className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
// // //       >
// // //         <FaSearch />
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;



// import React, { useState } from 'react';
// import { FaSearch, FaMale, FaFemale } from 'react-icons/fa';

// const Navbar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [category, setCategory] = useState('Men');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     // Fetch or filter suggestions based on the query
//     setSuggestions(
//       query
//         ? ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'].filter((item) =>
//             item.toLowerCase().includes(query.toLowerCase())
//           )
//         : []
//     );
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch({ query: searchQuery, category });
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setSuggestions([]);
//     handleSearch();
//   };

//   return (
//     <div className='bg-gray-700'>
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 w-full  shadow-md z-50 bg-gray-700">
//         <div className="flex items-center p-4 max-w-4xl mx-auto justify-between">
//           {/* Logo */}z
//           <div className="flex items-center space-x-4">
//             <img
//               src="https://images.pexels.com/photos/27441168/pexels-photo-27441168/free-photo-of-a-duck-swimming-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Logo"
//               className="h-14 w-14 rounded-full"
//             />
//             <span className="text-xl font-bold"></span>
//           </div>

//           {/* Search Bar */}
//           <div className="flex items-center w-full max-w-3xl space-x-4">
//             <select
//               value={category}
//               onChange={handleCategoryChange}
//               className="p-2 bg-gray-100 border-none focus:outline-none"
//             >
//               <option value="Men">
//                 <FaMale className="inline-block mr-1" /> Men
//               </option>
//               <option value="Women">
//                 <FaFemale className="inline-block mr-1" /> Women
//               </option>
//             </select>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleInputChange}
//               placeholder="Search..."
//               className="flex-grow p-2 border rounded-l-lg focus:outline-none"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
//             >
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Suggestions */}
//       {suggestions.length > 0 && (
//         <ul className="bg-white shadow rounded-lg mt-16 max-w-4xl mx-auto transition-all duration-300">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div className="navbar">
//         <div><h1>rentify</h1></div>
//         <div>your fav</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React from 'react'
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <div className="navbar">
          
           <h1>Rentify</h1>
         

             <div>
              <Link to ='/favorites'>
              <h3>Your Favorites</h3>
              </Link>
             </div>

          </div>
          </>
  )
}

export default Navbar