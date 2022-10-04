import { USERS_API } from "../config.js";

const getUserById = async () => {
  try {
    const response = await fetch(USERS_API.getUserById, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export { getUserById };
