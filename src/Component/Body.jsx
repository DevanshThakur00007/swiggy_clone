import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import ResturantCard from "./RestCard";
import Search from "./Search";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);            // original data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // filtered/search data
  const [isClicked1, SetIsClicked1] = useState(false);
  const [isClicked2, SetIsClicked2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ApiCalling();
      setRestaurants(data);
      setFilteredRestaurants(data);
    };
    fetchData();
  }, []);


    const handleSearch = (query) => {
    if (!query) {
      setFilteredRestaurants(restaurants);
      return;
    }
    setFilteredRestaurants(
      restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

 
  const filterTopRating = () => {
    setFilteredRestaurants(
      restaurants.filter((res) => res.info.avgRating >= 4.5)
    );
    SetIsClicked1(true);
    SetIsClicked2(false);
  };

  const resetFilter = () => {
    setFilteredRestaurants(restaurants);
    SetIsClicked1(false);
    SetIsClicked2(true);
  };

  return (
  <div>
  <h1 className="font-bold text-xl mx-10 my-5">
    Restaurants with online food delivery in Varanasi
  </h1>

  <div className="flex items-center justify-center gap-6 mb-6">
   
    <Search onSearch={handleSearch} />


    <button
      onClick={filterTopRating}
      className={`px-4 py-2 rounded-2xl border transition ${
        isClicked1 ? "bg-orange-400 text-white" : "hover:bg-orange-100"
      }`}
    >
      Rating 4.5+
    </button>

    <button
      onClick={resetFilter}
      className={`px-4 py-2 rounded-2xl border transition ${
        isClicked2 ? "bg-orange-400 text-white" : "hover:bg-orange-100"
      }`}
    >
      Reset
    </button>
  </div>

  {/* ✅ Restaurant list */}
  <div className="flex flex-wrap justify-center gap-6">
    {filteredRestaurants.length > 0 ? (
      filteredRestaurants.map((res) => (
        <ResturantCard key={res.info.id} rest={res.info} />
      ))
    ) : (
      <p className="m-4">No restaurants found...</p>
    )}
  </div>
</div>

  );
};

export default Body;
