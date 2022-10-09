import { POSTING_API } from "../config.js";

export async function createPost(status) {
  try {
    const newPost = {
      messages: status,
      createdBy: "633fe1e1dadc42808a40c8ce",
    };
    const responseCreatePost = await fetch(POSTING_API.createPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    return responseCreatePost;
  } catch (error) {
    console.log(error.message);
  }
}
