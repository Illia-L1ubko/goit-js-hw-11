import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52593892-e60586d66f6e8b7acef69d169";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}



