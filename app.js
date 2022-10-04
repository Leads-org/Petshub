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

renderUser();
