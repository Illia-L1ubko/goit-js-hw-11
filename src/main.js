import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = form.elements["search-text"].value.trim();
  if (!query) {
    iziToast.error({
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

    clearGallery();
    showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.warning({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
    form.reset();
  }
});