import { URL_API } from "../url.js";

export async function deletePost(_id) {
  try {
    const responseDeletePost = await fetch(URL_API.deletePost(_id), {
      method: "DELETE",
    });
    const data = await responseDeletePost.json();
    return data;
  } catch (error) {
    throw new error(error.message);
  }
}
