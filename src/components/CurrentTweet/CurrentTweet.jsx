import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
// import { updateFollowers } from "../../utils/tweetApi";
import { Wraper, Frame, ImgWraper, Button } from "./CurrentTweet.styled";

export const CurrentTweet = ({ tweet, changeFavorite }) => {
  const { id, user, tweets, followers, avatar } = tweet;

  // const [follow, setFollow] = useState(followers);
  // const [favorite, setFavorite] = useState(followers);
  // console.log(id, follow);

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

  //     const data = { id, follow: update };
  //     await updateFollowers(data);
  //   }
  // }
  // useEffect(() => {
  //   const data = { id, follow };
  //   updateFollowers(data);
  // }, [setFollow, follow]);
  const theme = useTheme();
  return (
    <Wraper>
      <ImgWraper>
        <Frame src={avatar} alt={user} width="48" />
      </ImgWraper>
      <p style={{ marginTop: theme.space[5] }}>
        <span>{tweets}</span> tweets
      </p>
      <p style={{ marginTop: theme.space[4] }}>
        <span>{followers}</span> followers
      </p>
      <Button type="button" onClick={() => changeFavorite(tweet)}>
        follow
      </Button>
    </Wraper>
  );
};
