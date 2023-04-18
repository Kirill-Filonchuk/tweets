import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

import {
  Wraper,
  Frame,
  ImgWraper,
  Button,
  ButtonN,
} from "./CurrentTweet.styled";

export const CurrentTweet = ({ tweet, changeFavorite }) => {
  const { id, user, tweets, followers, avatar } = tweet;
  const [acent, setAcent] = useState(false);

  useEffect(() => {
    const writeFavorites = localStorage.getItem("favorites");
    const parseFavorite = JSON.parse(writeFavorites);

    if (parseFavorite) {
      setAcent(parseFavorite.some((item) => item.id === id));
    }
  }, [setAcent, id]);

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
        <span>{followers.toLocaleString("en-US")}</span> followers
      </p>
      {acent ? (
        <Button
          acent
          type="button"
          onClick={() => {
            changeFavorite(tweet).then((res) => {
              if (res) {
                setAcent(res);
              } else {
                setAcent(res);
              }
              console.log(`${id} set >>> ${res}`);
            });
          }}
        >
          following
        </Button>
      ) : (
        <ButtonN
          acent
          type="button"
          onClick={() => {
            changeFavorite(tweet).then((res) => {
              if (res) {
                setAcent(res);
              } else {
                setAcent(res);
              }
            });
          }}
        >
          follow
        </ButtonN>
      )}
    </Wraper>
  );
};
