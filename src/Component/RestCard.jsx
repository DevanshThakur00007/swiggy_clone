function ResturantCard({ rest }) {
  if (!rest) return null;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 shadow-lg rounded-lg hover:scale-105 transition-transform duration-200">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={
          rest.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${rest.cloudinaryImageId}`
            : "https://via.placeholder.com/250x150?text=No+Image"
        }
        alt={rest.name}
      />
      <h2 className="font-bold text-lg mt-2">{rest.name}</h2>
      <h3 className="text-sm text-gray-600">
        {rest.cuisines?.join(", ") || "Cuisine info not available"}
      </h3>
      <h4 className="font-semibold mt-1">
        ⭐ {rest.avgRating ? rest.avgRating : "N/A"}
      </h4>
      <h4 className="text-gray-500 text-sm">{rest.areaName}</h4>
    </div>
  );
}

export default ResturantCard;
