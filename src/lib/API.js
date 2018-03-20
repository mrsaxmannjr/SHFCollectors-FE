const API_URL = "http://localhost:3000/api/v1/figures";

export default {
  async getAll() {
    const response = await fetch(API_URL);
    return response.json();
  },
};
