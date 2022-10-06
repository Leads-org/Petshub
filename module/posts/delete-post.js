import { URL_API } from "../url.js";

export async function deletePost(_id) {
  try {
    const delPost = {
      _id,
    };
    const responseDeletePost = await fetch(URL_API.deletePost, {
      method: "DELETE",
      body: JSON.stringify(delPost),
    });
    const data = await responseDeletePost.json();
    return data;
  } catch (error) {
    throw new error(error.message);
  }
}
