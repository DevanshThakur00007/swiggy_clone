import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // Get cart items from Redux store
    const cartItems = useSelector((store) => store.cart.items) || [];

    const dispatch = useDispatch()


    function handleClearCart() {

        dispatch(clearCart())
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">🛒 Cart Items</h1>
            <button
                className="border border-black border-solid mb-2 bg-red-300 px-4 py-2 rounded hover:bg-red-400 transition-colors duration-200"
                onClick={() => handleClearCart()}
            >
                Remove Everything
            </button>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 mb-6 border rounded-lg shadow bg-white space-y-4"
                    >
                        {/* Basic Info (No image) */}
                        <div>
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            {item.cuisines && (
                                <p className="text-gray-600 mt-1">
                                    {item.cuisines.join(", ")}
                                </p>
                            )}
                            <p className="text-lg font-semibold mt-1">
                                ⭐ {item.avgRating || "N/A"}
                            </p>
                            <p className="text-gray-500 mt-1">
                                {item.areaName || "Location not available"}
                            </p>
                        </div>

                        {/* Menu Section */}
                        {item.menu && item.menu.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3">Menu</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {item.menu.map((dish, idx) => (
                                        <div
                                            key={idx}
                                            className="border p-4 rounded-lg shadow hover:scale-105 transition transform"
                                        >
                                            <h3 className="font-semibold">{dish.name}</h3>
                                            {dish.description && (
                                                <p className="text-gray-600 text-sm">
                                                    {dish.description}
                                                </p>
                                            )}
                                            <p className="font-bold mt-1">
                                                ₹{dish.price || "N/A"}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
