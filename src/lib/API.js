const API_URL = window.location.hostname == "localhost" ?
  "http://localhost:3000/api/v1/" :
  "https://shfexpress.herokuapp.com/api/v1/";

export default {
  async getAll() {
    const response = await fetch(`${API_URL}figures`);
    return response.json();
  },
  async getDragonBall() {
    const response = await fetch(`${API_URL}dragonBall`);
    return response.json();
  },
  async getStarWars() {
    const response = await fetch(`${API_URL}starWars`);
    return response.json();
  },
  async getMarvel() {
    const response = await fetch(`${API_URL}marvel`);
    return response.json();
  },
};
