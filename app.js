
import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";
import { deletePost } from "./module/posts/delete-post.js";
import { getUserById } from "./features/user/get-user.js";

const profileName = document.querySelector(".profile-name");

// render user profile
function renderUser() {
  getUserById().then((data) => {
    profileName.innerHTML = `
        ${data.name}<p>@${data.nickname}</p>
    `;
  });
}
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
        <button onclick='delPost("${_id}")' type="submit" class="button">delete</button>
      </div>`;
    })
    .join("");
};

window.delPost = async (_id) => {
  const delPosts = await deletePost(_id);
  renderPost();
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
renderUser();

