import { POSTING_API } from "../config.js";

export async function getPost() {
  try {
    const response = await fetch(POSTING_API.getPost);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
