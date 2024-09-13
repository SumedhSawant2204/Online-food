// // // src/components/ServiceCards.jsx
// // import React from 'react';

// // const ServiceCards = () => {
// //   const services = [
// //     {
// //       title: "Order Online",
// //       description: "Stay home and order to your doorstep",
// //       imageUrl: "https://th.bing.com/th/id/OIP.mURrmR_uNDX74zSE3_tbwAHaFj?rs=1&pid=ImgDetMain", // replace with the actual image URL or import image
// //     },
// //     {
// //       title: "Dining",
// //       description: "View the city's favourite dining venues",
// //       imageUrl: "https://th.bing.com/th/id/OIP.mURrmR_uNDX74zSE3_tbwAHaFj?rs=1&pid=ImgDetMain", // replace with the actual image URL or import image
// //     },
// //     {
// //       title: "Live Events",
// //       description: "Discover India’s best events & concerts",
// //       imageUrl: "https://th.bing.com/th/id/OIP.mURrmR_uNDX74zSE3_tbwAHaFj?rs=1&pid=ImgDetMain", // replace with the actual image URL or import image
// //     },
// //   ];

// //   return (
// //     <div className="max-w-screen-xl mx-auto p-4">
// //       <div className="flex flex-wrap justify-center md:justify-between gap-1">
// //         {services.map((service, index) => (
// //           <div 
// //             key={index} 
// //             className="max-w-sm rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
// //             style={{ flex: '1 1 30%' }} // Responsive flexbox with equal width cards
// //           >
// //             <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.title} />
// //             <div className="p-4 bg-white">
// //               <div className="font-bold text-lg md:text-xl mb-2 text-gray-800">{service.title}</div>
// //               <p className="text-gray-600 text-sm md:text-base">
// //                 {service.description}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceCards;

// import React from 'react';

// const ServiceCards = () => {
//   const services = [
//     {
//       title: "BrakeFast",
//       description: "Stay home and order to your doorstep",
//       imageUrl: "https://cdn.healthversed.com/healthversed/wp-content/uploads/2019/08/4-common-breakfast-foods-diabetics-should-avoid.jpg", // replace with the actual image URL or import image
//     },
//     {
//       title: "Lunch",
//       description: "View the city's favourite dining venues",
//       imageUrl: "https://bitehaven.com/wp-content/uploads/2017/02/40-healthy-lunch-salad-recipes.jpg", // replace with the actual image URL or import image
//     },
//     {
//       title: "Dinner",
//       description: "Discover India’s best events & concerts",
//       imageUrl: "https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg", // replace with the actual image URL or import image
//     },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto p-4">
//       <div className="flex flex-wrap justify-center gap-4">
//         {services.map((service, index) => (
//           <div 
//             key={index} 
//             className="w-full sm:w-1/2 md:w-1/3 max-w-sm rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
//           >
//             <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.title} />
//             <div className="p-4 bg-white">
//               <div className="font-bold text-lg md:text-xl mb-2 text-gray-800">{service.title}</div>
//               <p className="text-gray-600 text-sm md:text-base">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCards;


import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      title: "BrakeFast",
      description: "Stay home and order to your doorstep",
      imageUrl: "https://cdn.healthversed.com/healthversed/wp-content/uploads/2019/08/4-common-breakfast-foods-diabetics-should-avoid.jpg", // replace with the actual image URL or import image
    },
    {
      title: "Lunch",
      description: "View the city's favourite dining venues",
      imageUrl: "https://bitehaven.com/wp-content/uploads/2017/02/40-healthy-lunch-salad-recipes.jpg", // replace with the actual image URL or import image
    },
    {
      title: "Dinner",
      description: "Discover India’s best events & concerts",
      imageUrl: "https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg", // replace with the actual image URL or import image
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-12"> {/* Added mt-4 for top margin */}
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 max-w-sm rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.title} />
            <a href='./ProductListR'>
            <div className="p-4 bg-white">
              <div className="font-bold text-lg md:text-xl mb-2 text-gray-800">{service.title}</div>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
