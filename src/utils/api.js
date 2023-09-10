import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    return response.data.features;
  } catch (err) {
    throw err;
  }
  return;
}
