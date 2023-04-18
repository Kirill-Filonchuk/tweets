import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import ReactPaginate from "react-paginate";

import ClipLoader from "react-spinners/ClipLoader";
import { fetchTweetsData, fetchTweetsPage } from "../utils/tweetApi";
import { Cards } from "../components/Cards/Cards";

const Wraper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 15px;
  place-items: center;
  padding: 20px 20px;
`;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Tweets = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);
  const [allPages, setAllPages] = useState(0);
  const [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTweetsData().then((res) => {
      const allPage = Math.ceil(res.data.length / 8);
      setAllPages(allPage);
    });
    fetchTweetsPage(page).then((res) => {
      if (res.data.length) setLoading(false);
      setTweets(res.data);
    });
  }, [setTweets, page]);

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    await fetchTweetsPage(currentPage).then((res) => {
      if (res.data.length) setLoading(false);
      setTweets(res.data);
    });
    setPage(currentPage);
  };

  const btnGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <button type="button" onClick={btnGoHome}>
        Go to Home
      </button>
      <p style={{ padding: theme.space[3] }}>
        Tweets page. It's render on =-'/tweets' path
      </p>
      {loading ? (
        <ClipLoader
          color={"#42fa3c"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Wraper>
          <Cards tweets={tweets} setTweets={setTweets} page={page} />
        </Wraper>
      )}
      <ReactPaginate
        previousLabel="<<<"
        nextLabel=">>>"
        breakLabel="..."
        pageCount={allPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        // pageCount={pageCount}
        // renderOnZeroPageCount={null}
      />
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
