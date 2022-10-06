export const BASE_URL =
  "https://api.kontenbase.com/query/api/v1/ae63b34f-463c-4e8c-a0b7-63ad40fd5746";

export const URL_API = {
  getPost: `${BASE_URL}/Post?$lookup=*`,
  createPost: `${BASE_URL}/Post`,
  deletePost: (_id) => `${BASE_URL}/Post/${_id}`,
};
