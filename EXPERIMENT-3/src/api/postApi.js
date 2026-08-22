import api from "../config/apiConfig";
export async function getPostsAll() {
  const response =
    await api.get("/posts");
  return response.data;
}
