import { POSTING_API } from "../config.js";

export async function deletePost(_id) {
  try {
    const responseDeletePost = await fetch(POSTING_API.deletePost(_id), {
      method: "DELETE",
    });
    const data = await responseDeletePost.json();
    return data;
  } catch (error) {
    throw new error(error.message);
  }
}
