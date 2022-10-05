import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";

const formElement = document.getElementById("post-field");
const postSectionElement = document.getElementsByClassName(
  "card-post-container"
)[0];

const renderPost = async () => {
  const posts = await getPost();
  postSectionElement.innerHTML = posts

    .reverse()
    .map(({ description, UpdateAt }) => {
      return `
      <div class="post-container">
      <div class="col-2">
                <div class="avatar"></div>
              </div>
              <h2>${UpdateAt}</h2>
        <h1>${description}</h1>
        <button type="submit" class="button">delete</button>
        
      </div>`;
    })
    .join("");
};

formElement.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const form = new FormData(formElement);
    const postValue = form.get("post");
    const addPost = await createPost(postValue);
    renderPost();
  } catch (error) {
    console.error(error.message);
  }
});

renderPost();
