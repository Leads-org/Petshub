import { URL_API } from "../url.js";

export async function createPost(status) {
  try {
    const payload = {
      status,
    };
    const responseCreatePost = await fetch(URL_API.createPost, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await responseCreatePost.json();
    return data;
  } catch (error) {
    throw new error(error.message);
  }
}
