/* This example requires Tailwind CSS v2.0+ */
const products1 = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://content.jdmagicbox.com/comp/visakhapatnam/k6/0891px891.x891.210618204724.r8k6/catalogue/punjabi-food-truck-kurmannapalem-visakhapatnam-food-trucks-1ctfylbjt4.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
      id: 2,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: 'https://3.bp.blogspot.com/-7zL7lgBKry4/WtDfnufTS2I/AAAAAAAAIwM/rP6sdyXqeC0Ln8poAsLHRJZFxOu1E8VzwCLcBGAs/s1600/IMG_20180413_221039_242.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 2,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: 'https://i.ytimg.com/vi/uvLaUQmZsiQ/maxresdefault.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 2,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: 'https://im.whatshot.in/img/2018/Aug/shutterstock-1059779252-1533298287.jpg?wm=1&w=1200&h=630&cc=1',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
  // More products...
]
  
  export default function Product1() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">Trending Foods</h1>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products1.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  