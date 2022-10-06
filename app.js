import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";
import { deletePost } from "./module/posts/delete-post.js";
import { getUserById } from "./module/user/get-user.js";

const profileName = document.querySelector(".profile-name");

// render user profile
function renderUser() {
  getUserById().then((data) => {
    profileName.innerHTML = `
        ${data.name}<p>@${data.nickname}</p>
    `;
  });
}

// posting
const formElement = document.getElementById("post-field");
const postSectionElement = document.getElementById("post-section");

const renderPost = (posts) => {
  postSectionElement.innerHTML = posts
    .map((posts) => {
      return `
        <div class="card">
          <div class="button-card">
            <a href="#" class="deleted" id="${posts._id}">
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Z"/></svg>
            </a>
         </div>
          <div class="item-container">
            <div class="col-2">
              <div class="avatar"></div>
            </div>
            <div class="col-max">
              <span class="text-name"
                >Makmur
                <label class="text-username" for="">@celine</label>
              </span>
              <div class="post-container">
                ${posts.status}
              </div>
              <div class="post-container">
                <div class="button-posts">
                  <svg width="32" height="32" viewBox="0 0 16 16">
                    <g fill="#FFF">
                      <path d="M5 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/>
                      <path d="m2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7s-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272a1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                    </g>
                  </svg>
                </div>
                <div class="button-posts">
                  <svg width="32" height="32" viewBox="0 0 16 16">
                    <path
                      fill="#FFF"
                      d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    />
                  </svg>
                </div>
                <div class="button-posts">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <g fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <circle cx="5" cy="18" r="2" />
                      <circle cx="19" cy="6" r="2" />
                      <path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3m-6-2v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3"/>
                    </g>
                  </svg>
                </div>
                <div class="button-posts">
                  <svg width="32" height="32" viewBox="0 0 1024 1024">
                    <path
                      fill="#FFF"
                      d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120s-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3c0 66.2 53.8 120 120 120s120-53.8 120-120s-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52s-52-23.3-52-52s23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88s88 39.5 88 88s-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52s52 23.3 52 52s-23.3 52-52 52z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

function fetchPosts() {
  getPost().then((data) => {
    renderPost(data);
  });
}

window.delPost = async (_id) => {
  const delPosts = await deletePost(_id);
  renderPost();
};

// submit posts
formElement.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const form = new FormData(formElement);
    const postValue = form.get("post");
    if (!postValue) {
      throw new Error("Please fill the post");
    }
    createPost(postValue).then(() => {
      console.log("saved successfully");
      fetchPosts();
      formElement.reset();
    });
  } catch (error) {
    alert(error.message);
    console.error(error.message);
  }
});

fetchPosts();
renderUser();
