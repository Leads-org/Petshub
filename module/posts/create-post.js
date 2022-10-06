import { POSTING_API } from "../config.js";

export async function createPost(status) {
  try {
    const newPost = {
      status: status,
    };
    const responseCreatePost = await fetch(POSTING_API.createPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    return responseCreatePost;
  } catch (error) {
    throw new error(error.message);
  }
}
