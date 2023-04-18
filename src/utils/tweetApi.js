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

export const fetchTweetsPage = async (page) => {
  try {
    const response = await axios.get(`/tweets/?page=${page}&limit=8`);
    return response;
  } catch (e) {
    console.log(e.message);
  }
};

export const updateFollowers = async (data) => {
  const { id, followers } = data;
  //   console.log("API", id);
  console.log("API", followers);
  try {
    const res = await axios.put(`/tweets/${id}`, {
      followers: followers,
    });
    console.log(res);
    return res;
  } catch (e) {
    console.log(e.message);
  }
};
