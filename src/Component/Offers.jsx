import { useState } from "react";

const offersData = [
  {
    id: 1,
    restaurant: "Domino's Pizza",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dominos_pizza_logo.svg",
    offer: "Flat 50% OFF on all Pizzas",
    rating: 4.3,
    code: "PIZZA50",
  },
  {
    id: 2,
    restaurant: "Burger King",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-Logo.png",
    offer: "Get 2 Whoppers @ ₹199",
    rating: 4.1,
    code: "KING199",
  },
  {
    id: 3,
    restaurant: "KFC",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    offer: "₹100 OFF on ₹499",
    rating: 4.4,
    code: "KFC100",
  },
  {
    id: 4,
    restaurant: "Subway",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Subway-Logo.png",
    offer: "Buy 1 Get 1 Free",
    rating: 4.2,
    code: "SUBB1G1",
  },
];

const Offers = () => {
  const [offers] = useState(offersData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🔥 Offers Near You</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Restaurant Logo */}
            <img
              src={item.logo}
              alt={item.restaurant}
              className="w-16 h-16 rounded-full border object-contain bg-gray-50 p-2"
            />

            {/* Offer Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.restaurant}</h2>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                ⭐ {item.rating}
              </p>
              <p className="text-green-600 font-medium flex items-center gap-1">
                🎉 {item.offer}
              </p>
              <p className="text-xs text-gray-500">
                Use Code: <span className="font-bold">{item.code}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
