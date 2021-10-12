import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import usePosts from "../../hooks/usePosts";
import Loading from "../Loading";

const PostsGrid = ({ filters, title }) => {
  const {
    data: posts = {},
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
  } = usePosts(filters);

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={2} sm={4} md={12}>
        <h5 className="font-weight-bold text-uppercase">{title}</h5>
      </Grid>
      {posts &&
        posts.pages &&
        posts.pages.map((page) =>
          page.data.map((post, idx) => (
            <Grid key={idx} item xs={2} sm={4} md={4}>
              <PostCard post={post} />
            </Grid>
          ))
        )}
      <Grid item xs={2} sm={4} md={12}>
        {isLoading && <Loading />}
        {isFetchingNextPage && <Loading />}
      </Grid>
      {hasNextPage && (
        <Grid item xs={2} sm={4} md={12}>
          <div className="text-center">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => fetchNextPage()}
            >
              Show more
            </Button>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default PostsGrid;
