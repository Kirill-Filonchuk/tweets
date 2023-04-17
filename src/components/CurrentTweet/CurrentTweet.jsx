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

  // const writeFavorites = localStorage.getItem("favorites");
  // const parseFavorite = JSON.parse(writeFavorites);
  // console.log(parseFavorite);
  // if (parseFavorite) {
  //   // const ar = [];
  //   const ra = parseFavorite.some((item) => item.id === id);
  //   setAcent(true);
  //   console.log(ra, "----=-=");
  // }
  useEffect(() => {
    const writeFavorites = localStorage.getItem("favorites");
    const parseFavorite = JSON.parse(writeFavorites);
    // console.log(parseFavorite);
    if (parseFavorite) {
      // const ar = [];
      // const ra = parseFavorite.some((item) => item.id === id);
      setAcent(parseFavorite.some((item) => item.id === id));
      // console.log(ra, "----=-=");
    }
  }, [setAcent, id]);

  // console.log(`ACENT >>> ${acent}`);
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
              console.log(`${id} set >>> ${res}`);
            });
          }}
        >
          follow
        </ButtonN>
      )}
    </Wraper>
  );
};

// useEffect(() => {
//   updateFollowers(id);
// }, [acent, setAcent]);
// function change() {
//   if (follow !== followers) setAcent(!acent);
//   return;
// }
// if (follow !== followers) setAcent(!acent);

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
