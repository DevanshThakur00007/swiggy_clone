import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; // ✅ import action
import ApiCalling from "./ApiCalling"; // fetch restaurant list

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiCalling(); // fetch all restaurants
        const found = data.find((res) => String(res.info.id) === String(id));

        if (found) {
          found.menu = [
            {
              id: 1,
              name: "Paneer Butter Masala",
              description: "Delicious paneer cooked in rich tomato gravy.",
              price: 250,
            },
            {
              id: 2,
              name: "Chicken Biryani",
              description: "Fragrant basmati rice with spicy chicken masala.",
              price: 320,
            },
            {
              id: 3,
              name: "Veg Burger",
              description: "Crispy patty with lettuce, cheese & sauces.",
              price: 150,
            },
          ];
        }

        setRestaurant(found);
      } catch (err) {
        console.error("Error fetching restaurant:", err);
      }
    };
    fetchData();
  }, [id]);

  if (!restaurant) {
    return <h2 className="p-6 text-xl animate-pulse">Loading...</h2>;
  }

  const { info, menu } = restaurant;

  function handleCartItem(foodItem) {
    dispatch(addItem(foodItem));
  }

  return (
    <div className="p-6 space-y-6">
      {/* ✅ Removed restaurant image */}
      <div>
        <h1 className="text-3xl font-bold">{info.name}</h1>
        <p className="text-gray-600 mt-1">{info.cuisines?.join(", ")}</p>
        <p className="text-lg font-semibold mt-1">
          ⭐ {info.avgRating || "N/A"}
        </p>
        <p className="text-gray-500 mt-1">
          {info.areaName || "Location not available"}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu && menu.length > 0 ? (
            menu.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow hover:scale-105 transition transform"
              >
                {/* ✅ Removed menu item image */}
                <h3 className="font-semibold">{item.name}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
                <p className="font-bold mt-1">₹{item.price}</p>

                {/* ✅ Add to Cart */}
                <button
                  onClick={() => handleCartItem(item)}
                  className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Menu items not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
