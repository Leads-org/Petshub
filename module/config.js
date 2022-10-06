const BACKEND_API_URL =
  "https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c";

const API_URL2 =
  "https://api.kontenbase.com/query/api/v1/ae63b34f-463c-4e8c-a0b7-63ad40fd5746";

const USERS_API = {
  getUsers: `${BACKEND_API_URL}/User`,
  getUserById: `${BACKEND_API_URL}/User/633c333adadc42808a40c6f6`,
};

const POSTING_API = {
  getPost: `${API_URL2}/Post?$lookup=*`,
  createPost: `${API_URL2}/Post`,
  deletePost: (_id) => `${API_URL2}/Post/${_id}`,
};

export { USERS_API, POSTING_API };
