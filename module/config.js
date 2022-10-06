const BACKEND_API_URL =
  "https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c";

const USERS_API = {
  getUsers: `${BACKEND_API_URL}/User`,
  getUserById: `${BACKEND_API_URL}/User/633c333adadc42808a40c6f6`,
};

const POSTING_API = {
  getPost: `${BACKEND_API_URL}/Post?$lookup=*`,
  createPost: `${BACKEND_API_URL}/Post`,
  deletePost: (_id) => `${BACKEND_API_URL}/Post/${_id}`,
};

export { USERS_API, POSTING_API };
