import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";
import { deletePost } from "./module/posts/delete-post.js";

const formElement = document.getElementById("post-field");
const postSectionElement = document.getElementsByClassName(
  "card-post-container"
)[0];

const renderPost = async () => {
  const posts = await getPost();
  postSectionElement.innerHTML = posts
    .reverse()
    .map(({ status, _id }) => {
      return `
      <div class="post-container">
      <div class="col-2">
                <div class="avatar"></div>
              </div>
        <h1>${status}</h1>
        <button onclick=delPost("${_id._id})class="button">delete</button>
        
      </div>`;
    })
    .join("");
};

const delPost = async (_id) => {
  const delPosts = await deletePost();
  delPosts();
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
