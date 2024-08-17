import React, { useState } from 'react';

const FoodCards = () => {
  const servicesRow1 = [
    {
      id: 1,
      title: "Nityam Food Court",
      description: "Chinese",
      time: "55 mins",
      offer: "FLAT ₹50 OFF",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
    {
      id: 2,
      title: "New Curry Parade",
      description: "North Indian",
      time: "43 mins",
      offer: "40% OFF up to ₹80",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
    {
      id: 3,
      title: "Bombay Sweet Shop",
      description: "Mithai",
      time: "30 mins",
      offer: "",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
  ];

  const servicesRow2 = [
    {
      id: 4,
      title: "Veg Sutra",
      description: "North Indian",
      time: "35 mins",
      offer: "30% OFF up to ₹65",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
    {
      id: 5,
      title: "Tandoor Treat",
      description: "Tandoori",
      time: "50 mins",
      offer: "20% OFF up to ₹100",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
    {
      id: 6,
      title: "Spice Hub",
      description: "South Indian",
      time: "45 mins",
      offer: "10% OFF up to ₹30",
      imageUrl: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
    },
  ];

  const [favorites, setFavorites] = useState([]);
  const [viewFavorites, setViewFavorites] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredServicesRow1 = viewFavorites ? servicesRow1.filter(service => favorites.includes(service.id)) : servicesRow1;
  const filteredServicesRow2 = viewFavorites ? servicesRow2.filter(service => favorites.includes(service.id)) : servicesRow2;

  return (
    <div className="p-4 md:px-20 lg:px-32 mt-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">FOR YOU</h2>
        <div className="flex justify-center mt-2">
          <button 
            className={`px-4 py-2 text-sm font-semibold ${!viewFavorites ? 'text-gray-700 border-b-2 border-red-400' : 'text-gray-700'}`}
            onClick={() => setViewFavorites(false)}
          >
            Recommended
          </button>
          <button 
            className={`px-4 py-2 text-sm font-semibold ${viewFavorites ? 'text-gray-700 border-b-2 border-red-400' : 'text-gray-700'}`}
            onClick={() => setViewFavorites(true)}
          >
            Favourites
          </button>
        </div>
      </div>

      {/* Combined Scrollable Card Container */}
      <div className="mt-4 space-y-4 overflow-x-auto snap-x scrollbar-hide">
        {/* First Row */}
        <div className="flex space-x-4">
          {filteredServicesRow1.map((service) => (
            <div
              key={service.id}
              className="snap-center w-96 flex-shrink-0 rounded-lg overflow-hidden shadow-md relative bg-white flex"
            >
              <img className="w-32 h-full object-cover" src={service.imageUrl} alt={service.title} />
              <div className="p-4 flex-grow">
                <div className="font-bold text-md mb-2 text-gray-800">{service.title}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <p className="text-gray-500 text-xs">{service.time}</p>
                {service.offer && <p className="text-green-600 text-sm font-bold">{service.offer}</p>}
              </div>
              <button
                onClick={() => toggleFavorite(service.id)}
                className={`absolute top-2 right-2 p-1 rounded-full ${favorites.includes(service.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-800'}`}
              >
                {favorites.includes(service.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex space-x-4">
          {filteredServicesRow2.map((service) => (
            <div
              key={service.id}
              className="snap-center w-96 flex-shrink-0 rounded-lg overflow-hidden shadow-md relative bg-white flex"
            >
              <img className="w-32 h-full object-cover" src={service.imageUrl} alt={service.title} />
              <div className="p-4 flex-grow">
                <div className="font-bold text-md mb-2 text-gray-800">{service.title}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <p className="text-gray-500 text-xs">{service.time}</p>
                {service.offer && <p className="text-green-600 text-sm font-bold">{service.offer}</p>}
              </div>
              <button
                onClick={() => toggleFavorite(service.id)}
                className={`absolute top-2 right-2 p-1 rounded-full ${favorites.includes(service.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-800'}`}
              >
                {favorites.includes(service.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
