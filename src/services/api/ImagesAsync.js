const API_KEY = "10786612-1f7c4a86cd3af4ed0123794b0";
let URL = "https://pixabay.com/api/?key=" + API_KEY;

const getImages = async (category, page) => {
  const chooseCategory = URL + "&orientation=horizontal&page=" + page + "&image_type=photo&category=" + category;
  const response = await fetch(chooseCategory);
  const json = await response.json();
  return json;
}
export default {
    getImages
};
