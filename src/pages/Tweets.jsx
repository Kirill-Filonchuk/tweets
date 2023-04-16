import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { fetchTweetsData } from "../utils/tweetApi";

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

  useEffect(() => {
    fetchTweetsData().then((res) => setTweets(res.data));
  }, [setTweets]);

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  console.log("navigate", navigate);

  const btnGoHome = () => {
    navigate("/");
  };
  console.log(tweets);
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
          const { id, ...rest } = tweet;
          return <CurrentTweet key={id} props={rest} />;
        })}
      </Wraper>
    </>
  );
};

export default Tweets;
