import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { fetchTweetsData } from "../utils/tweetApi";
import { updateFollowers } from "../utils/tweetApi";
import { CurrentTweet } from "../components/CurrentTweet/CurrentTweet";

const Wraper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 15px;
  place-items: center;
  padding: 20px 20px;
`;

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchTweetsData().then((res) => setTweets(res.data));
  }, [setTweets]);

  useEffect(() => {
    const writeFavorites = localStorage.getItem("favorites");
    const parseFavorite = JSON.parse(writeFavorites);
    if (parseFavorite) {
      setFavorites([...parseFavorite]);
    }
  }, [setFavorites]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  async function changeFavorite(tweet) {
    console.log("data*****", tweet);
    const { id, followers } = tweet;
    console.log("ADD id", id);
    const result = favorites.findIndex((item) => item.id === id);
    console.log("CHECK -> result", result);
    if (result === -1) {
      const update = followers + 1;
      tweet.followers = update;
      setFavorites([...favorites, tweet]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, tweet]));

      console.log("++++++++update", update);
      const data = { id, followers: update };
      await updateFollowers(data);
      await fetchTweetsData().then((res) => setTweets(res.data));

      return true;
    } else if (result >= 0) {
      favorites.splice(result, 1);
      setFavorites(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      const update = followers - 1;

      console.log("-----------update", update);
      const data = { id, followers: update };
      await updateFollowers(data);

      await fetchTweetsData().then((res) => setTweets(res.data));

      return false;
    }
  }

  const theme = useTheme();
  const navigate = useNavigate();

  const btnGoHome = () => {
    navigate("/");
  };
  // console.log(tweets);
  return (
    <>
      <button type="button" onClick={btnGoHome}>
        Go to Home
      </button>
      <p style={{ padding: theme.space[3] }}>
        Tweets page. It's render on =-'/tweets' path
      </p>
      <Wraper>
        {tweets.map((tweet) => {
          const { id } = tweet;
          return (
            <CurrentTweet
              key={id}
              tweet={tweet}
              changeFavorite={changeFavorite}
            />
          );
        })}
      </Wraper>
    </>
  );
};

export default Tweets;

// const location = useLocation();
// console.log("location", location);
// console.log("navigate", navigate);

// async function updateFollow() {
//   const favorite = changeFavorite({ id });
//   console.log(`+++++favorite ${favorite} -> ${id}`);
//   if (favorite) {
//     const update = followers + 1;
//     setFollow(update);

//     const data = { id, follow: update };
//     await updateFollowers(data);
//   } else {
//     const update = followers - 1;
//     setFollow(update);

//     const data = { id, followers: update };
//     await updateFollowers(data);
//   }
// }
