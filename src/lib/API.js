const API_URL = window.location.hostname == "localhost" ?
  "http://localhost:3002/api/v1/" :
  "https://shfexpress.herokuapp.com/api/v1/";

const APAC_URL = window.location.hostname == "localhost" ?
  "http://localhost:3000/list" :
  "https://apitestcapstone.herokuapp.com/list";

export default {
  async getAll() {
    const response = await fetch(`${API_URL}figures`);
    return response.json();
  },
  async getAllTEST() {
    const response = await fetch(`${APAC_URL}`);
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
  async postFigureData(data) {
    await fetch(`${API_URL}collection`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
  },
};
