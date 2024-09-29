import React from 'react';
import FilterButtons from './ProductListHeadder';
import Example from './Example';

const products = [
  {
    id: 1,
    name: "Domino's Pizza",
    category: "Pizzas, Italian, Pastas...",
    location: "Kurla West",
    href: "#",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s",
    imageAlt: "Pizza with toppings like mushrooms, peppers, and onions.",
    rating: 3.7,
    deliveryTime: "20-25 mins",
  },
  {
    id: 2,
    name: "Daily Kitchen",
    category: "Home Food, Indian, North...",
    location: "Kurla West",
    href: "#",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A meal of rice, vegetables, and roti with a side of raita.",
    rating: 4.4,
    deliveryTime: "20-30 mins",
  },
  {
    id: 3,
    name: "WeFit",
    category: "Healthy Food, Salads, Keto...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A colorful salad with various fresh vegetables and toppings.",
    rating: 4.7,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
  {
    id: 4,
    name: "NH1 Bowls",
    category: "North Indian, Punjabi, Hom...",
    location: "Kurla West",
    href: "#",
    
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4T6M7hekZ7woD-onlO4J-g-1s2YXNYeI_bQ&s://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
    imageAlt: "A bowl of rice and curry with a side of chutney.",
    rating: 4.6,
    deliveryTime: "20-30 mins",
  },
];

const Product = ({ product }) => {
  return (
    
    <div key={product.id} className="relative group border rounded-lg overflow-hidden shadow-lg">
      {/* Product Image with reduced size */}
    <a href='./ClientSidePage'><div className="relative overflow-hidden" style={{ height: '180px', width: '100%' }}>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="object-center object-cover w-full h-full"
        />
        {/* Price Text - Increased size and bold */}
        <div className="absolute bottom-0 left-0 right-0 text-white text-lg font-extrabold p-2 text-center">
          {product.price}
        </div>
      </div>
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center space-x-2 text-gray-700 text-sm">
          {product.rating && (
            <span className="flex items-center">
              {/* Green Star */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                className="w-4 h-4 mr-1"
              >
                <path d="M12 2l3 7h7l-5.6 4.5 2.6 7.5-6.5-4-6.5 4L8.6 13.5 3 9h7z" />
              </svg>
              {product.rating}
            </span>
          )}
          <span className="text-gray-500">{product.deliveryTime}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-1 text-sm text-gray-500">{product.location}</p>
      </div>
      </a>
    </div>
  );
};

const ProductList = () => {
  return (
    <>
    <Example />
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
            <FilterButtons/>
          {/* <h2 className="text-lg font-bold text-gray-900">Customers also viewed</h2> */}
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View all &rarr;
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductList;