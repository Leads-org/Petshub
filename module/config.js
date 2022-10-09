const BACKEND_API_URL =
  "https://api.kontenbase.com/query/api/v1/bee912c9-4dfd-4be3-97cc-5b3a353e0ac6";

const USERS_API = {
  getUsers: `${BACKEND_API_URL}/user`,
  getUserById: `${BACKEND_API_URL}/user/633fe1e1dadc42808a40c8ce`,
};

const POSTING_API = {
  getPost: `${BACKEND_API_URL}/posts?$lookup=*`,
  createPost: `${BACKEND_API_URL}/posts`,
  deletePost: (_id) => `${BACKEND_API_URL}/posts/${_id}`,
};

export { USERS_API, POSTING_API };
