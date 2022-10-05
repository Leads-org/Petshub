import { URL_API } from "../url.js";

export async function getPost() {
  try {
    const response = await fetch(URL_API.getPost);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
