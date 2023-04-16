import axios from "axios";
// https://63b1de4d5e490925c5100793.mockapi.io/contacts/tweets
// https://63b1de4d5e490925c5100793.mockapi.io/contacts/tweets/?page=4&limit=7
// const URL = "mockapi.io/contacts/tweets";
// const KEY = "63b1de4d5e490925c5100793";
axios.defaults.baseURL = "https://63b1de4d5e490925c5100793.mockapi.io/contacts";
export const fetchTweetsData = async () => {
  try {
    const response = await axios.get("/tweets");
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
