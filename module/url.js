export const BASE_URL =
  "https://api.kontenbase.com/query/api/v1/6158122d-ffc6-4101-a6dc-225b3c9a1f9c";

export const URL_API = {
  getPost: `${BASE_URL}/Post?$lookup=*`,
  createPost: `${BASE_URL}/Post`,
};
