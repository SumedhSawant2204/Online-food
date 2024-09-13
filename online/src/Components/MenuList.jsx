import React from 'react';
import Example from './Example';

const KhichdiCard = ({ image, title, price, rating, reviews, description }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-200">
      <img className="w-13 h-12 rounded" src={image} alt={title} />
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-green-600 flex items-center">
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-gray-500 text-sm ml-2">({reviews})</span>
            </div>
            <p className="text-gray-500 mt-2">{description}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">₹{price}</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">ADD</button>
            <p className="text-sm text-gray-400 mt-1">Customisable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const KhichdiList = () => {
  const khichdis = [
    {
      image: 'https://vaya.in/recipes/wp-content/uploads/2018/11/Panchratna-Dal-Khichdi.jpg',  // Replace with actual image URLs
      title: 'Dal Khichdi',
      price: 279,
      rating: 4.8,
      reviews: 363,
      description: 'Relish this healthy and tasty khichdi prepared with spinach along with toor dal and rice. This easily digestible khichdi is all you need for ...',
    },
    {
      image: 'https://i.ytimg.com/vi/Zt_vdcBjPvs/maxresdefault.jpg',  // Replace with actual image URLs
      title: 'Dal Palak Khichdi',
      price: 279,
      rating: 4.8,
      reviews: 363,
      description: 'Relish this healthy and tasty khichdi prepared with spinach along with toor dal and rice. This easily digestible khichdi is all you need for ...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xBkS-wxchG2ZCAiNzHa4XjBNNAucw7KX9w&s',  // Replace with actual image URLs
      title: 'Sabudana Khichdi (Shravan Specials)',
      price: 167,
      rating: 3.8,
      reviews: 24,
      description: 'Subtle and soft sabudana (sago) pearls tossed with curry leaves, chillies and roasted groundnuts - a delicious gluten-free meal. Served...',
    },
  ];

  return (
    <>
    <Example />
      <div className="max-w-2xl mx-auto">
        <h1 className="font-arial text-2xl font-bold mb-4">Homely Khichdi</h1>
      {khichdis.map((khichdi, index) => (
        <KhichdiCard key={index} {...khichdi} />
      ))}
    </div>
    </>
  );
};

export default KhichdiList;