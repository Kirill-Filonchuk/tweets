import { useState, useEffect } from "react";
import { fetchTweetsPage } from "../../utils/tweetApi";
import { updateFollowers } from "../../utils/tweetApi";
import { CurrentTweet } from "../CurrentTweet/CurrentTweet";

export const Cards = ({ tweets, setTweets, page }) => {
  const [favorites, setFavorites] = useState([]);

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

      await fetchTweetsPage(page).then((res) => setTweets(res.data));

      return true;
    } else if (result >= 0) {
      favorites.splice(result, 1);
      setFavorites(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      const update = followers - 1;

      console.log("-----------update", update);
      const data = { id, followers: update };
      await updateFollowers(data);

      await fetchTweetsPage(page).then((res) => setTweets(res.data));

      return false;
    }
  }

  return (
    <>
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
    </>
  );
};
