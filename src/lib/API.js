const API_URL = window.location.hostname == "localhost" ?
  "http://localhost:3000/api/v1/figures" :
  "https://shfexpress.herokuapp.com/api/v1/figures";

export default {
  async getAll() {
    const response = await fetch(API_URL);
    return response.json();
  },
};
