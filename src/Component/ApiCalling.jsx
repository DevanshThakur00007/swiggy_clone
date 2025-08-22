async function ApiCalling() {
  try {
    const res = await fetch(
      "/api/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025"
    );
    const data = await res.json();

    const cards = data?.data?.cards || [];
    let restaurantsList = [];

    for (let card of cards) {
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        restaurantsList = card.card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }

    return restaurantsList || [];
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
}

export default ApiCalling;
