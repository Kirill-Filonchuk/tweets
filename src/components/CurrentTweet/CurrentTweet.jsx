// {
//   "id":1,
//   "user": "Derrtt Gluke",
//   "tweets":898,
//   "followers": 73222110,
//   "avatar": "https://img.icons8.com/doodle/192/000000/walter-white.png"
//  },
import { useTheme } from "styled-components";
import { Wraper, Frame, ImgWraper, Button } from "./CurrentTweet.styled";
// import { useTheme } from "styled-components";
export const CurrentTweet = ({ props }) => {
  const { user, tweets, followers, avatar } = props;
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
      <Button type="button">follow</Button>
    </Wraper>
  );
};
